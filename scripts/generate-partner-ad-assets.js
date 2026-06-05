const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const outputDir = path.join(root, "marketing", "facebook-ads");
fs.mkdirSync(outputDir, { recursive: true });

const logo = path.join(root, "static", "images", "logo.png");
const campaigns = [
  {
    slug: "australia-irrigation-partners",
    market: "A U S T R A L I A",
    title: "Irrigation Partners\nWanted",
    services: ["Pump Control", "Valve Automation", "LoRa Wireless Valves", "Fertigation Systems"],
    audience: "FOR CONTRACTORS & INTEGRATORS",
    image: path.join(root, "static", "images", "landing", "upgrade-existing-system.webp"),
    accent: "#F1AD43",
    soft: "#A4E47B",
  },
  {
    slug: "middle-east-irrigation-project-partners",
    market: "U A E  &  M I D D L E  E A S T",
    title: "Irrigation Project\nPartners Wanted",
    services: ["Solar Pump Irrigation", "Fertigation", "Valve Automation", "Farm Control Cabinets"],
    audience: "FOR LOCAL PROJECT COMPANIES",
    image: path.join(root, "static", "images", "solution", "system-overview.webp"),
    accent: "#F1AD43",
    soft: "#78D7C0",
  },
];

const formats = [
  { slug: "feed-4x5", width: 1080, height: 1350 },
  { slug: "square-1x1", width: 1080, height: 1080 },
  { slug: "story-9x16", width: 1080, height: 1920 },
];

for (const campaign of campaigns) {
  for (const format of formats) {
    const { width, height } = format;
    const tall = height > 1500;
    const titleY = tall ? 430 : 350;
    const titleSize = tall ? 78 : 70;
    const servicesY = tall ? 720 : 590;
    const serviceGap = tall ? 90 : 72;
    const audienceTop = servicesY + serviceGap * 4 + (tall ? 40 : 25);
    const footerY = height - 55;
    const output = path.join(outputDir, `${campaign.slug}-${format.slug}-${width}x${height}.png`);
    const draw = [
      `fill rgba(9,49,40,0.90) rectangle 0,0 ${width},${height}`,
      `fill none stroke ${campaign.soft} stroke-opacity 0.20 stroke-width 3 circle ${width + 15},210 ${width - 300},210`,
      `fill white roundrectangle 70,55 340,155 12,12`,
      `fill ${campaign.accent} roundrectangle 74,275 220,283 4,4`,
      `fill ${campaign.accent} roundrectangle 74,${audienceTop} ${width - 74},${audienceTop + 82} 12,12`,
    ].join(" ");

    const args = [
      campaign.image,
      "-auto-orient",
      "-resize", `${width}x${height}^`,
      "-gravity", "center",
      "-extent", `${width}x${height}`,
      "-gravity", "northwest",
      "-draw", draw,
      "(", logo, "-resize", "226x64", ")",
      "-geometry", "+92+72",
      "-composite",
      "-font", "ArialUnicode",
      "-fill", campaign.soft,
      "-pointsize", tall ? "27" : "25",
      "-annotate", `+74+${tall ? 235 : 225}`, campaign.market,
      "-fill", "white",
      "-pointsize", `${titleSize}`,
      "-interline-spacing", tall ? "15" : "10",
      "-annotate", `+74+${titleY}`, campaign.title,
    ];

    campaign.services.forEach((service, index) => {
      const y = servicesY + index * serviceGap;
      args.push(
        "-fill", campaign.accent,
        "-draw", `circle 105,${y - 11} 117,${y - 11}`,
        "-fill", "white",
        "-pointsize", tall ? "39" : "34",
        "-annotate", `+142+${y}`, service,
      );
    });

    args.push(
      "-fill", "#14382E",
      "-pointsize", tall ? "27" : "24",
      "-annotate", `+100+${audienceTop + 47}`, campaign.audience,
      "-fill", "rgba(255,255,255,0.78)",
      "-pointsize", "21",
      "-annotate", `+74+${footerY}`, "SMART IRRIGATION  |  PROJECT COOPERATION",
      "-strip",
      "-quality", "92",
      output,
    );

    execFileSync("magick", args);
    console.log(`Created ${path.relative(root, output)}`);
  }
}

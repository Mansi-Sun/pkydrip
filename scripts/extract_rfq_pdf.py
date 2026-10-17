# -*- coding: utf-8 -*-
import base64, zlib, re

data = open(r'D:/Users/Administrator/Downloads/Smart_Irrigation_Controller_Initial_RFQ_Specifica.pdf', 'rb').read()
streams = re.findall(rb'stream\r?\n(.*?)endstream', data, re.S)
pat = re.compile(r'\(((?:[^()\\]|\\.)*)\)\s*Tj')
for i, s in enumerate(streams):
    body = s.strip()
    out = zlib.decompress(base64.a85decode(body, adobe=True)).decode('latin-1')
    strs = pat.findall(out)
    text = ' '.join(strs)
    text = text.replace('\\(', '(').replace('\\)', ')')
    text = text.replace('\x26#x226;', '-').replace('\226', '-')
    print(f'===== PAGE {i+1} =====')
    print(text)

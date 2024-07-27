import requests
import sys
import cv2

config_file = 'C:/Projeto2/Opencv/ssd_mobilenet_v3_large_coco_2020_01_14.pbtxt'
frozen_model = 'C:/Projeto2/Opencv/frozen_inference_graph.pb'

model = cv2.dnn_DetectionModel(frozen_model,config_file)

dict = {}
lista = []
labelsClasse = []
arquivo = 'C:/Projeto2/Opencv/labels.txt'
with open(arquivo,'rt') as ftp:
    labelsClasse = ftp.read().rstrip('\n').split('\n')

foto = str(sys.argv[1])
model.setInputSize(320,320)
model.setInputScale(1.0/127.5)
model.setInputMean((127.5,127.5,127.5))
model.setInputSwapRB(True)

img = cv2.imread("C:/Projeto2/Opencv/" + foto)

index,confidence,bbox = model.detect(img,confThreshold = 0.5)
font = cv2.FONT_HERSHEY_COMPLEX
for indClass,conf,boxes in zip(index,confidence,bbox):
    cv2.rectangle(img,boxes,(255,0,0))
    cv2.putText(img,labelsClasse[indClass-1],(boxes[0]+10,boxes[1]+40),font,fontScale=1,color=(0,255,0),thickness=3)
    lista.append(labelsClasse[indClass-1])


cv2.imshow("image",img)
cv2.waitKey(0)
dict["objetos"]=lista
print(dict)
r = requests.post('http://localhost:5000/api/arquivo', json=dict)



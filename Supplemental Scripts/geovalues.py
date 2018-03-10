import json
import pandas as pd 


dataframe = pd.DataFrame(pd.read_csv("CountyDeathsCleanCodes.csv"))
length = len(dataframe)


with open('map.json') as mapdata:
    data = json.load(mapdata)  
    for i in range(len(data["features"])):
        # print("JSON: " + data["features"][i]["properties"]["CNTYIDFP"])
        print(str(i))
        for j in range(length):
            #print("DF: " + str(dataframe["CountyCode"][j]))
            if str(dataframe["CountyCode"][j]) == data["features"][i]["properties"]["CNTYIDFP"]:
                if dataframe["Category"][j] == "All Causes":
                    data["features"][i]["properties"]["AllDeaths"] = str(dataframe["Deaths"][j])
                elif dataframe["Category"][j] == "Alzheimer's disease":
                    data["features"][i]["properties"]["Alz"] = str(dataframe["Deaths"][j])
                elif dataframe["Category"][j] == "Cancer":
                    data["features"][i]["properties"]["Cancer"] = str(dataframe["Deaths"][j])
                elif dataframe["Category"][j] == "CLRD":
                    data["features"][i]["properties"]["CLRD"] = str(dataframe["Deaths"][j])
                elif dataframe["Category"][j] == "Diabetes":
                    data["features"][i]["properties"]["Diabetes"] = str(dataframe["Deaths"][j])
                elif dataframe["Category"][j] == "Diseases of Heart":
                    data["features"][i]["properties"]["Heart"] = str(dataframe["Deaths"][j])
                elif dataframe["Category"][j] == "Homicide":
                    data["features"][i]["properties"]["Homicide"] = str(dataframe["Deaths"][j])
                elif dataframe["Category"][j] == "Essential hypertension and hypertensive renal disease":
                    data["features"][i]["properties"]["Hyper"] = str(dataframe["Deaths"][j])
                elif dataframe["Category"][j] == "Kidney Disease":
                    data["features"][i]["properties"]["Kidney"] = str(dataframe["Deaths"][j])
                elif dataframe["Category"][j] == "Chronic liver disease and cirrhosis":
                    data["features"][i]["properties"]["Liver"] = str(dataframe["Deaths"][j])
                elif dataframe["Category"][j] == "Parkinson's disease":
                    data["features"][i]["properties"]["Park"] = str(dataframe["Deaths"][j])
                elif dataframe["Category"][j] == "Influenza and pneumonia":
                    data["features"][i]["properties"]["Pneuflu"] = str(dataframe["Deaths"][j])
                elif dataframe["Category"][j] == "Pneumonitis due to solids and liquids":
                    data["features"][i]["properties"]["Pneumon"] = str(dataframe["Deaths"][j])
                elif dataframe["Category"][j] == "Septicemia":
                    data["features"][i]["properties"]["Sept"] = str(dataframe["Deaths"][j])
                elif dataframe["Category"][j] == "Stroke":
                    data["features"][i]["properties"]["Stroke"] = str(dataframe["Deaths"][j])
                elif dataframe["Category"][j] == "Suicide":
                    data["features"][i]["properties"]["Suicide"] = str(dataframe["Deaths"][j])
                elif dataframe["Category"][j] == "Unintentional Injuries":
                    data["features"][i]["properties"]["Unintentional"] = str(dataframe["Deaths"][j])
        if int(data["features"][i]["properties"]["CNTYIDFP"]) in dataframe["CountyCode"]:
            dataframe = dataframe[dataframe.CountyCode != int(data["features"][i]["properties"]["CNTYIDFP"])]
            dataframe = dataframe.reset_index(drop=True)
            length = len(dataframe)
            # print(len(dataframe), len(dataframe.CountyCode), len(dataframe.Category))
with open('mapout.json', 'w') as new: 
    new.write(json.dumps(data))



# with open('mapout.json') as new:
#     data = json.load(new)
#     print(data["features"][3]["properties"])
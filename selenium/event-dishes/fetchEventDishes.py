from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import urllib

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

url_list = [
           'https://genshin-impact.fandom.com/wiki/Lantern_Rite_Special_Come_and_Get_It',
           'https://genshin-impact.fandom.com/wiki/Lantern_Rite_Special_Fried_Radish_Balls',
           'https://genshin-impact.fandom.com/wiki/Lantern_Rite_Special_Grilled_Tiger_Fish',
           'https://genshin-impact.fandom.com/wiki/Lantern_Rite_Special_Jewelry_Soup',
           'https://genshin-impact.fandom.com/wiki/Lantern_Rite_Special_Lotus_Seed_and_Bird_Egg_Soup',
           'https://genshin-impact.fandom.com/wiki/Lantern_Rite_Special_Noodles_with_Mountain_Delicacies',
           'https://genshin-impact.fandom.com/wiki/Lantern_Rite_Special_Triple-Layered_Consommé'
]

event_dishes_data = open("eventDishesData.json", "a")

for j in range(len(url_list) - 1):
    driver.get(url_list[j])

    official_name = driver.find_element('xpath', '//*[@id="mw-content-text"]/div/aside/h2').get_attribute('innerText')
    tag_name = official_name.lower().replace(' ', '-').replace('"', '')

    description = driver.find_element("xpath", '//*[@id="mw-content-text"]/div/aside/section[1]/div/div[1]/div').get_attribute('innerText')
    quality = driver.find_element('xpath', '//*[@id="mw-content-text"]/div/aside/div[2]/div/img').get_attribute('title').split()[0]
    dish_type = driver.find_element('xpath', '//*[@id="mw-content-text"]/div/aside/div[1]/div/a[2]').get_attribute('innerText').replace('es', '')
    effect = driver.find_element('xpath', '//*[@id="mw-content-text"]/div/aside/section[1]/div/div[2]/div').get_attribute('innerText')
    event = driver.find_element('xpath', '//*[@id="mw-content-text"]/div/aside/div[4]/div/a').get_attribute('innerText')
    base_dish = driver.find_element('xpath', '//*[@id="mw-content-text"]/div/aside/div[3]/div/span/span[2]/a').get_attribute('innerText')
    
    img_url = driver.find_element("xpath", '//*[@id="mw-content-text"]/div/aside/section[1]/div/figure/a/img').get_attribute('src')
    

    formatted_data = (f' "{tag_name}": {{\n '
                      f' "name": "{official_name}",\n '
                      f' "rarity": {quality},\n '
                      f' "type": "{dish_type}",\n '
                      f' "effect": "{effect}",\n '
                      f' "hasRecipe": false,\n '
                      f' "description": "{description}",\n '
                      f' "baseDish": "{base_dish}",\n '
                      f' "event": "{event}",\n ')

    print(formatted_data)

    urllib.request.urlretrieve(img_url, tag_name)

    event_dishes_data.write(f'{formatted_data} \n')

event_dishes_data.close()

driver.quit()

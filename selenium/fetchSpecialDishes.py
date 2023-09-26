# https://www.geeksforgeeks.org/download-google-image-using-python-and-selenium
# https://stackoverflow.com/questions/64799002/how-to-loop-through-a-list-of-urls-using-selenium-and-python
# https://www.geeksforgeeks.org/how-to-scrape-multiple-pages-using-selenium-in-python/

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By
import urllib

# session start
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

# url = 'https://genshin-impact.fandom.com/wiki/Food#List_of_Special_Dishes'

# driver.get(url)
# table = driver.find_element("xpath", '//*[@id="mw-content-text"]/div/table[4]/tbody')
# rows = table.find_elements(By.TAG_NAME, 'tr')
# prints Item "My Way"
# official_name = rows[0].find_elements(By.TAG_NAME, 'a')[1].get_attribute('innerHTML')
# tag_name = official_name.lower().replace(' ', '-')

# quality = rows[0].find_elements(By.TAG_NAME, 'img')[1].get_attribute('alt').split()[0]
# remove plural for dish_type
# dish_type = rows[0].find_elements(By.TAG_NAME, 'td')[3].get_attribute('innerText')
# effect = rows[0].find_elements(By.TAG_NAME, 'td')[4].get_attribute('innerText')
# character = rows[0].find_elements(By.TAG_NAME, 'td')[5].get_attribute('innerText')
# driver.implicitly_wait(2)
# formatted_url_name = official_name.replace(' ', '_')
# print(formatted_url_name)
# print(f'https://genshin-impact.fandom.com/wiki/{formatted_url_name}')
# driver.get(f'https://genshin-impact.fandom.com/wiki/{formatted_url_name}')
driver.get(f'https://genshin-impact.fandom.com/wiki/"My_Way"')

description = driver.find_element("xpath", '//*[@id="mw-content-text"]/div/aside/section[1]/div/div[1]/div').get_attribute('innerText')
# description.replace('Description', '')
base_dish = driver.find_element("xpath", '//*[@id="mw-content-text"]/div/aside/div[3]/div/span/span[2]').get_attribute('innerText')
img = driver.find_element("xpath", '//*[@id="mw-content-text"]/div/aside/section[1]/div/figure/a/img').get_attribute('src')
recipe_body = driver.find_element(By.CLASS_NAME, 'new_genshin_recipe_body')
recipe_items = recipe_body.find_elements(By.CLASS_NAME, 'card-container')

formatted_recipe_data = (' "recipe": [\n ')

for i in range(len(recipe_items) - 1):
    curr_quantity = recipe_items[i].find_element(By.CLASS_NAME, 'card-text').get_attribute('innerText')
    curr_item = recipe_items[i].find_element(By.CLASS_NAME, 'card-caption').get_attribute('innerText')
    # do if loop for whether or not to include the comma at the end lol
    formatted_recipe_item = (f'   {{\n '
                             f' "item": "{curr_item}",\n '
                             f' "quantity": {curr_quantity}\n '
                             f' }},\n ')

    formatted_recipe_data += formatted_recipe_item 

formatted_recipe_remainder = (' ]\n '
                              '}},')
formatted_recipe_data += formatted_recipe_remainder
# formattedData = (f' {tag_name}: {{\n '
#     f' "name": {official_name},\n '
#     f' "rarity": {quality},\n '
#     f' "type": "{dish_type}",\n '
#     f' "effect": "{effect}",\n '
#     f' "hasRecipe": true,\n '
#     f' "description": "???",\n '
#     f' "character": "{character}",\n '
#     f' "proficiency": "??",\n '
#     f' "baseDish": "??",\n '
#     f' "recipe": [\n '
#     f'   {{\n '
#         f' "item": "??",\n '
#         f' "quantity": 3\n '
#       f' }},\n '
#       f' {{\n '
#         f' "item": "",\n '
#         f' "quantity": 2\n '
#       f' }}\n '
#     f' ]\n '
#   f'}},')
# print('AAAAAAA')
print('buh', description)
print(base_dish)
print(img)
print(formatted_recipe_data)
# print(formattedData)
# img_name = curr_item.replace('"', '').replace(' ', '-').lower()
# urllib.request.urlretrieve(img, img_name)

driver.quit()

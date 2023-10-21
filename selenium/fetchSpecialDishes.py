# https://www.geeksforgeeks.org/download-google-image-using-python-and-selenium
# https://stackoverflow.com/questions/64799002/how-to-loop-through-a-list-of-urls-using-selenium-and-python
# https://www.geeksforgeeks.org/how-to-scrape-multiple-pages-using-selenium-in-python/

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By
import urllib
import os

# session start
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

url_list = [
'https://genshin-impact.fandom.com/wiki/"Consomme_Purete"', 
'https://genshin-impact.fandom.com/wiki/"My_Way"', 
'https://genshin-impact.fandom.com/wiki/"Once_Upon_a_Time_in_Mondstadt"', 
'https://genshin-impact.fandom.com/wiki/"Seabird\'s_Sojourn"', 
'https://genshin-impact.fandom.com/wiki/"Snow_on_the_Hearth"', 
'https://genshin-impact.fandom.com/wiki/"Sweet_Dream"', 
'https://genshin-impact.fandom.com/wiki/"Warmth"', 
'https://genshin-impact.fandom.com/wiki/A_Buoyant_Breeze', 
'https://genshin-impact.fandom.com/wiki/A_Leisurely_Sip', 
'https://genshin-impact.fandom.com/wiki/A_Prize_Catch', 
'https://genshin-impact.fandom.com/wiki/A_Stunning_Stratagem', 
'https://genshin-impact.fandom.com/wiki/All-Delicacy_Parcels', 
'https://genshin-impact.fandom.com/wiki/All-Weather_Beauty', 
'https://genshin-impact.fandom.com/wiki/Cloud-Shrouded_Jade', 
'https://genshin-impact.fandom.com/wiki/Cold_Noodles_with_Mountain_Delicacies', 
'https://genshin-impact.fandom.com/wiki/Cubic_Tricks', 
'https://genshin-impact.fandom.com/wiki/Definitely_Not_Bar_Food!', 
'https://genshin-impact.fandom.com/wiki/Der_Weisheit_Letzter_Schluss_(Life)', 
'https://genshin-impact.fandom.com/wiki/Dew-Dipped_Shrimp', 
'https://genshin-impact.fandom.com/wiki/Die_Heilige_Sinfonie', 
'https://genshin-impact.fandom.com/wiki/Dinner_of_Judgment', 
'https://genshin-impact.fandom.com/wiki/Dizziness-Be-Gone_no_Jutsu_Version_2.0', 
'https://genshin-impact.fandom.com/wiki/Duel_Soul', 
'https://genshin-impact.fandom.com/wiki/Energizing_Bento', 
'https://genshin-impact.fandom.com/wiki/Extravagant_Slumber',
'https://genshin-impact.fandom.com/wiki/Faith_Eternal', 
'https://genshin-impact.fandom.com/wiki/Fish-Flavored_Toast', 
'https://genshin-impact.fandom.com/wiki/Flash-Fried_Filet', 
'https://genshin-impact.fandom.com/wiki/Forest_Watcher\'s_Choice', 
'https://genshin-impact.fandom.com/wiki/Fruity_Skewers', 
'https://genshin-impact.fandom.com/wiki/Fukuuchi_Udon', 
'https://genshin-impact.fandom.com/wiki/Ghostly_March', 
'https://genshin-impact.fandom.com/wiki/Goldflame_Tajine', 
'https://genshin-impact.fandom.com/wiki/Halvamazd', 
'https://genshin-impact.fandom.com/wiki/Heartstring_Noodles', 
'https://genshin-impact.fandom.com/wiki/Heat-Quelling_Soup', 
'https://genshin-impact.fandom.com/wiki/Ideal_Circumstance', 
'https://genshin-impact.fandom.com/wiki/Invigorating_Pizza', 
'https://genshin-impact.fandom.com/wiki/Lighter-Than-Air_Pancake', 
'https://genshin-impact.fandom.com/wiki/Mysterious_Bolognese', 
'https://genshin-impact.fandom.com/wiki/No_Tomorrow', 
'https://genshin-impact.fandom.com/wiki/Nutritious_Meal_(V.593)', 
'https://genshin-impact.fandom.com/wiki/Omurice_Waltz', 
'https://genshin-impact.fandom.com/wiki/Outrider\'s_Champion_Steak!', 
'https://genshin-impact.fandom.com/wiki/Prosperous_Peace', 
'https://genshin-impact.fandom.com/wiki/Puppy-Paw_Hash_Brown', 
'https://genshin-impact.fandom.com/wiki/Qiankun_Mora_Meat', 
'https://genshin-impact.fandom.com/wiki/Qingce_Household_Dish', 
'https://genshin-impact.fandom.com/wiki/Quiet_Elegance', 
'https://genshin-impact.fandom.com/wiki/Rockin\'_Riffin\'_Chicken!', 
'https://genshin-impact.fandom.com/wiki/Satiety_Gel', 
'https://genshin-impact.fandom.com/wiki/Secret_Sauce_BBQ_Ribs', 
'https://genshin-impact.fandom.com/wiki/Shimi_Chazuke', 
'https://genshin-impact.fandom.com/wiki/Show_Me_the_Mora', 
'https://genshin-impact.fandom.com/wiki/Slow-Cooked_Bamboo_Shoot_Soup', 
'https://genshin-impact.fandom.com/wiki/Spicy_Stew', 
'https://genshin-impact.fandom.com/wiki/Stormcrest_Pie', 
'https://genshin-impact.fandom.com/wiki/Summer_Festival_Fish', 
'https://genshin-impact.fandom.com/wiki/Surveyor\'s_Breakfast_Sandwich', 
'https://genshin-impact.fandom.com/wiki/Survival_Grilled_Fish', 
'https://genshin-impact.fandom.com/wiki/Swirling_Steps', 
'https://genshin-impact.fandom.com/wiki/Teyvat_Charred_Egg', 
'https://genshin-impact.fandom.com/wiki/The_Endeavor', 
'https://genshin-impact.fandom.com/wiki/The_Only_Truth', 
'https://genshin-impact.fandom.com/wiki/Traditionally-Made_Charcoal-Baked_Ajilenakh_Cake', 
'https://genshin-impact.fandom.com/wiki/Utmost_Care', 
'https://genshin-impact.fandom.com/wiki/Victorious_Legend', 
'https://genshin-impact.fandom.com/wiki/Wanmin_Restaurant\'s_Boiled_Fish', 
'https://genshin-impact.fandom.com/wiki/Way_of_the_Strong', 
'https://genshin-impact.fandom.com/wiki/Woodland_Dream', 
'https://genshin-impact.fandom.com/wiki/Yearning'
]

special_dishes_data = open("specialDishesData.json", "a")

for j in range(len(url_list) - 1): 
    # url = 'https://genshin-impact.fandom.com/wiki/Food#List_of_Special_Dishes'

    # driver.get(url)

    driver.get(url_list[j])

    official_name = driver.find_element('xpath', '//*[@id="mw-content-text"]/div/aside/h2').get_attribute('innerText')
    tag_name = official_name.lower().replace(' ', '-').replace('"', '')

    description = driver.find_element("xpath", '//*[@id="mw-content-text"]/div/aside/section[1]/div/div[1]/div').get_attribute('innerText')
    quality = driver.find_element('xpath', '//*[@id="mw-content-text"]/div/aside/div[2]/div/img').get_attribute('title').split()[0]
    dish_type = driver.find_element('xpath', '//*[@id="mw-content-text"]/div/aside/div[1]/div/a[2]').get_attribute('innerText').replace('es', '')
    effect = driver.find_element('xpath', '//*[@id="mw-content-text"]/div/aside/section[1]/div/div[2]/div').get_attribute('innerText')
    character = driver.find_element('xpath', '//*[@id="mw-content-text"]/div/aside/div[4]/div/span/span[2]/a').get_attribute('innerText')

    base_dish = driver.find_element("xpath", '//*[@id="mw-content-text"]/div/aside/div[3]/div/span/span[2]').get_attribute('innerText')[1:]
    img_url = driver.find_element("xpath", '//*[@id="mw-content-text"]/div/aside/section[1]/div/figure/a/img').get_attribute('src')
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
    #remember to take out last comma in recipe
    # formatted_recipe_data = formatted_recipe_data.rstrip(formatted_recipe_data[-1])
    formatted_recipe_remainder = (']\n '
                                '},')
    formatted_recipe_data += formatted_recipe_remainder
    formatted_data = (f' "{tag_name}": {{\n '
        f' "name": "{official_name}",\n '
        f' "rarity": {quality},\n '
        f' "type": "{dish_type}",\n '
        f' "effect": "{effect}",\n '
        f' "hasRecipe": false,\n '
        f' "description": "{description}",\n '
        f' "character": "{character}",\n '
        f' "baseDish": "{base_dish}",\n ')
    formatted_data += formatted_recipe_data
    # print('AAAAAAA')
    # print(base_dish)
    # print(img)
    # print(formatted_recipe_data)
    print(formatted_data)
    # img_name = tag_name.replace('"', '').replace(' ', '-').lower()
    urllib.request.urlretrieve(img_url, tag_name)

    special_dishes_data.write(f'{formatted_data} \n')
    
special_dishes_data.close()

driver.quit()

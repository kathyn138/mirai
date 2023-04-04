## https://www.geeksforgeeks.org/download-google-image-using-python-and-selenium
# https://stackoverflow.com/questions/64799002/how-to-loop-through-a-list-of-urls-using-selenium-and-python
# https://www.geeksforgeeks.org/how-to-scrape-multiple-pages-using-selenium-in-python/

from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager

service = ChromeService(executable_path=ChromeDriverManager().install())

url_list = [
  'https://genshin-impact.fandom.com/wiki/Aaru_Mixed_Rice',
  'https://genshin-impact.fandom.com/wiki/Activated_Starshroom',
  'https://genshin-impact.fandom.com/wiki/Baklava',
  'https://genshin-impact.fandom.com/wiki/Berry_Mizu_Manjuu',
  'https://genshin-impact.fandom.com/wiki/Bird_Egg_Sushi',
  'https://genshin-impact.fandom.com/wiki/Biryani',
  'https://genshin-impact.fandom.com/wiki/Bountiful_Year',
  'https://genshin-impact.fandom.com/wiki/Braised_Meat',
  'https://genshin-impact.fandom.com/wiki/Butter_Chicken',
  'https://genshin-impact.fandom.com/wiki/Butter_Crab',
  'https://genshin-impact.fandom.com/wiki/Candied_Ajilenakh_Nut',
  'https://genshin-impact.fandom.com/wiki/Charcoal_Baked_Ajilenakh_Cake',
  'https://genshin-impact.fandom.com/wiki/Chicken_Tofu_Pudding',
  'https://genshin-impact.fandom.com/wiki/Chili_Mince_Cornbread_Buns',
  'https://genshin-impact.fandom.com/wiki/Crab_Roe_Kourayaki',
  'https://genshin-impact.fandom.com/wiki/Crab_Roe_Tofu',
  'https://genshin-impact.fandom.com/wiki/Crocodile_Jerky',
  'https://genshin-impact.fandom.com/wiki/Cured_Pork_Dry_Hotpot',
  'https://genshin-impact.fandom.com/wiki/Curry_Shrimp',
  'https://genshin-impact.fandom.com/wiki/Dango_Milk',
  'https://genshin-impact.fandom.com/wiki/Dragon_Beard_Noodles',
  'https://genshin-impact.fandom.com/wiki/Dry_Braised_Salted_Fish',
  'https://genshin-impact.fandom.com/wiki/Egg_Roll',
  'https://genshin-impact.fandom.com/wiki/Fish_With_Cream_Sauce',
  'https://genshin-impact.fandom.com/wiki/Five_Pickled_Treasures',
  'https://genshin-impact.fandom.com/wiki/Fruits_Of_The_Festival',
  'https://genshin-impact.fandom.com/wiki/Gilded_Tajine',
  'https://genshin-impact.fandom.com/wiki/Grilled_Unagi_Fillet',
  'https://genshin-impact.fandom.com/wiki/Imported_Poultry',
  'https://genshin-impact.fandom.com/wiki/Invigorating_Kitty_Meal',
  'https://genshin-impact.fandom.com/wiki/Katsu_Sandwich',
  'https://genshin-impact.fandom.com/wiki/Konda_Cuisine',
  'https://genshin-impact.fandom.com/wiki/Lambad_Fish_Roll',
  'https://genshin-impact.fandom.com/wiki/Masala_Cheese_Balls',
  'https://genshin-impact.fandom.com/wiki/Meat_Lovers_Mushroom_Pizza',
  'https://genshin-impact.fandom.com/wiki/Milky_Mushroom_Crisp_Tower',
  'https://genshin-impact.fandom.com/wiki/Minty_Bean_Soup',
  'https://genshin-impact.fandom.com/wiki/Miso_Soup',
  'https://genshin-impact.fandom.com/wiki/Mixed_Yakisoba',
  'https://genshin-impact.fandom.com/wiki/More_And_More',
  'https://genshin-impact.fandom.com/wiki/Mushroom_Hodgepodge',
  'https://genshin-impact.fandom.com/wiki/Omelette_Rice',
  'https://genshin-impact.fandom.com/wiki/Oncidium_Tofu',
  'https://genshin-impact.fandom.com/wiki/Onigiri',
  'https://genshin-impact.fandom.com/wiki/Padisarah_Pudding',
  'https://genshin-impact.fandom.com/wiki/Panipuri',
  'https://genshin-impact.fandom.com/wiki/Pita_Pocket',
  'https://genshin-impact.fandom.com/wiki/Potato_Boat',
  'https://genshin-impact.fandom.com/wiki/Radish_And_Fish_Stew',
  'https://genshin-impact.fandom.com/wiki/Rainbow_Aster',
  'https://genshin-impact.fandom.com/wiki/Rice_Buns',
  'https://genshin-impact.fandom.com/wiki/Rice_Cake_Soup',
  'https://genshin-impact.fandom.com/wiki/Rice_Pudding',
  'https://genshin-impact.fandom.com/wiki/Rose_Custard',
  'https://genshin-impact.fandom.com/wiki/Sabz_Meat_Stew',
  'https://genshin-impact.fandom.com/wiki/Sakura_Mochi',
  'https://genshin-impact.fandom.com/wiki/Sakura_Shrimp_Crackers',
  'https://genshin-impact.fandom.com/wiki/Sakura_Tempura',
  'https://genshin-impact.fandom.com/wiki/Samosa',
  'https://genshin-impact.fandom.com/wiki/Sangayaki',
  'https://genshin-impact.fandom.com/wiki/Sashimi_Platter',
  'https://genshin-impact.fandom.com/wiki/Scented_Meat_Balls',
  'https://genshin-impact.fandom.com/wiki/Scorched_Starshroom',
  'https://genshin-impact.fandom.com/wiki/Selva_Salad',
  'https://genshin-impact.fandom.com/wiki/Shawarma_Wrap',
  'https://genshin-impact.fandom.com/wiki/Soba_Noodles',
  'https://genshin-impact.fandom.com/wiki/Sparkling_Berry_Juice',
  'https://genshin-impact.fandom.com/wiki/Special_Mushroom_Pizza',
  'https://genshin-impact.fandom.com/wiki/Starshroom',
  'https://genshin-impact.fandom.com/wiki/Stir_Fried_Fish_Noodles',
  'https://genshin-impact.fandom.com/wiki/Stir_Fried_Shrimp',
  'https://genshin-impact.fandom.com/wiki/Sunset_Berry_Tea',
  'https://genshin-impact.fandom.com/wiki/Sweet_Shrimp_Sushi',
  'https://genshin-impact.fandom.com/wiki/Tahchin',
  'https://genshin-impact.fandom.com/wiki/Taiyaki',
  'https://genshin-impact.fandom.com/wiki/Tandoori_Roast_Chicken',
  'https://genshin-impact.fandom.com/wiki/Tonkotsu_Ramen',
  'https://genshin-impact.fandom.com/wiki/Tri_Flavored_Skewer',
  'https://genshin-impact.fandom.com/wiki/Tricolor_Dango',
  'https://genshin-impact.fandom.com/wiki/Tulumba',
  'https://genshin-impact.fandom.com/wiki/Tuna_Sushi',
  'https://genshin-impact.fandom.com/wiki/Udon_Noodles',
  'https://genshin-impact.fandom.com/wiki/Unagi_Chazuke',
  'https://genshin-impact.fandom.com/wiki/Wakatakeni'
]

#session start
driver = webdriver.Chrome()

for url in url_list:
    driver.get(url)

    title = driver.title
    assert title == "Web form"

    driver.implicitly_wait(0.5)

    text_box = driver.find_element(by=By.NAME, value="my-text")
    submit_button = driver.find_element(by=By.CSS_SELECTOR, value="button")

    text_box.send_keys("Selenium")
    submit_button.click()

    message = driver.find_element(by=By.ID, value="message")
    value = message.text
    assert value == "Received!"

driver.quit()
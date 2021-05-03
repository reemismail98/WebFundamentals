SELECT name,language,percentage FROM languages 
JOIN countries ON countries.id = languages.country_id where language='Slovene' ORDER BY percentage DESC;
SELECT countries.name, count(cities.name) as total from cities Join countries
 ON countries.id=cities.country_id group by countries.name ORDER BY total DESC;
# Le-quattro-stagioni

create angular app ( use latest Angular version ) using following layout https://wireframe.cc/M438ld

How to run the server locally:

- clone or download the repo
- in terminal window run cd Le-quattro-stagioni/
- run npm install
- node bin/www

TODO: 

1) get data from the API and display it on the main page
2) implement a radio button for different views (grid view and list view)
3) implement searching by: name, season, description
4) implement grouping by: season, days_count ( dropdown list with the following options: 'Season', 'Days count' )
5) implement filtering by: season ( dropdown list with the following options: 'Winter', 'Spring', 'Summer', 'Autumn' )
6) implement sorting by: date, name, season, days_count ( dropdown list with the following options: 'Date', 'Name', 'Season', 'Days count' )
7) search, sorting, grouping, filtering should work with each other's result


    EXAMPLE A:
    
      1) I have grouped the data by seasons
      
          I should see 4 groups with the name of the season at the top of the group


          Winter: 

            < --- 4 cards here

          Spring: 
          
            < --- 4 cards here
              
          and etc.
          
      2) Now I can filter all my groups by "Winter"

          I should see only 1 group with the name of the season at the top of the group

          Winter: 

            < --- 4 cards here
            
      3) Now I can search by name of the month


          If I type "Feb" I should see only 1 group with the name of the season at the top of the group

          Winter: 

            < --- 1 card here, February
            
            
            
   Example B:
      
      1) I have filtered the data by "Winter"
          
            I should see only 3 cards

      2) Now I can sort by name

            I should see only 3 cards, December is first, February is second and January is the last one

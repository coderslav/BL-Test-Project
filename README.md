### Project launch guide

> Before you start, make sure that you have Docker installed ( [Docker](https://www.docker.com/) ). And run it

-   Clone this project to your computer
-   Use the terminal to go to the root folder (BL_TEST_PROJECT) of the project. In this folder there should be a file called docker-compose.yml
-   Run the command: docker-compose build
-   The build process takes some time. Please wait
-   After the build is completed, enter the following command: docker-compose up
-   Congratulations! The project has been launched

### Project usage guide

-   Open your browser and follow the link http://127.0.0.1:3000 or http://localhost:3000
-   To use sorting, just click on the header of the column you want to sort (sorting works in descending and ascending order)
-   For realty details, click on the title of the realty that you are interested in
-   The rest of the usage should be intuitive. Enjoy :)

### Notes

-   I had to replace the Django library "psycopg2-binary 2.8.6" that was in the mission specs with a newer one "psycopg2-binary 2.9.3". Reason: Incompatibility and numerous errors during server startup
-   The description of the mission is in the adjacent file called "MISSION.md"

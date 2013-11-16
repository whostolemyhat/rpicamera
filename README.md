#RPi Camera site

Automatically takes a photo every 5 mins and refreshes the page.

You will need to set up Nginx and create an images folder under /usr/share/nginx/www/img. 

You'll also need to set up a cron job under root which runs camera.py every 5mins.

##Require:
- Rpi
- RPi camera module
- Nginx
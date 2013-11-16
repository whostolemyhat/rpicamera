#!usr/bin/python
from subprocess import call
from datetime import datetime

time = datetime.now().strftime('%Y-%m-%d-%H-%M-%S')
cmd = ('raspistill -t 500 -o /usr/share/nginx/www/img/image-' + time + '.jpg')

call(cmd, shell=True)
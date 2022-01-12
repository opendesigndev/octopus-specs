FROM alpine:3.15

RUN apk add --no-cache lighttpd

ADD dist/ /var/www/localhost/htdocs/

EXPOSE 80

CMD ["/usr/sbin/lighttpd", "-D", "-f", "/etc/lighttpd/lighttpd.conf"]


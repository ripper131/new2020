# استفاده از یک ایمیج پایه
FROM node:16

# تنظیم دایرکتوری کار
WORKDIR /app

# کپی کردن فایل‌های پروژه
COPY package.json .
COPY . .

# نصب وابستگی‌ها
RUN npm install

# اجرای برنامه
CMD ["npm", "start"]

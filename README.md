![](./logo.png)

 <p>

[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)
![Visitors](https://api.visitorbadge.io/api/visitors?path=AdityaSeth777%2FPymPay%20&countColor=%23263759&style=flat)
![GitHub forks](https://img.shields.io/github/forks/AdityaSeth777/PymPay)
![GitHub Repo stars](https://img.shields.io/github/stars/AdityaSeth777/PymPay)
![GitHub contributors](https://img.shields.io/github/contributors/AdityaSeth777/PymPay)
![GitHub last commit](https://img.shields.io/github/last-commit/AdityaSeth777/PymPay)
![GitHub repo size](https://img.shields.io/github/repo-size/AdityaSeth777/PymPay)
![Github](https://img.shields.io/github/license/AdityaSeth777/PymPay)
![GitHub issues](https://img.shields.io/github/issues/AdityaSeth777/PymPay)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/AdityaSeth777/PymPay)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AdityaSeth777/PymPay)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/AdityaSeth777/PymPay)

 </p>



# Welcome to PymPay: Your Financial Universe 🌌


### Introducing PymPay, where the world of finance meets the marvel of technology! Seamlessly blending the innovative spirit of Hank Pym (aka Ant-Man) with the convenience of modern online banking, PymPay is your gateway to effortless transactions, secure payments, and financial empowerment.

________________________________________
# It is an open source software :D
I originally developed this with no intentions of this being an open source software or keeping it one. But time went on and I believed that it would actually develop more if it was an open source software and now it is open for other devs to contribute to. It was originally developed by me and I'll mention every dev who will be contributing to this :->

| GitHub ID  | Contribution | PR Link |
| ------------- | ------------- | ------------- | 
| [@deepbeatz](https://github.com/deepbeatz)  | Minor Text Alignment in buttons fixed  | [Pull Req. #8](https://github.com/AdityaSeth777/PymPay/pull/8)  | 
| [@SatyakiDey75](https://github.com/SatyakiDey75)  | Updated portfolio url of main dev  | [Pull Req. #9](https://github.com/AdityaSeth777/PymPay/pull/9)  | 
| [@apu52](https://github.com/apu52)  | Added badges to the readme from [Shields](https://github.com/badges/shields)  | [Pull Req. #14](https://github.com/AdityaSeth777/PymPay/pull/14)  | 
| [@arghadipmanna101](https://github.com/arghadipmanna101)  | Improved SEO and overall website performance  | [Pull Req. #16](https://github.com/AdityaSeth777/PymPay/pull/16)  | 

-----------

## Why Choose PymPay?

🔒 **Security**: Just as Pym's suit offers protection, PymPay ensures your transactions are shielded by cutting-edge security measures.

⚡ **Speed**: Experience swift transactions that rival Ant-Man's lightning-fast movements, making managing your finances a breeze.

💰 **Simplicity**: Navigating the PymPay universe is as simple as Hank Pym's famous catchphrase, "Pym Particles!" Enjoy an intuitive interface for all your financial needs.

🌐 **Global Reach**: With PymPay, your financial universe knows no bounds. Send and receive funds across galaxies with ease.

📈 **Growth and Control**: Like Pym's research, PymPay empowers you to control and grow your financial journey, unlocking opportunities as you go.


## Join the PymPay Movement

Become a part of the PymPay revolution and step into a world where finance and technology intertwine like never before. Unleash your financial potential with PymPay, the future of online banking.

> _PymPay: Where Marvel meets money._

## Description

This is a web-based application that allows users to perform various banking operations such as deposit, withdraw, transfer, and check balance. The application has separate access for admin, client, and staff roles with real-time database updation.

## Requirements

To run this application, you need the following software installed on your system:

- PHP: A server-side scripting language that executes the application logic. You can download PHP from here.
- MySQL: A relational database management system that stores and retrieves the application data. You can download MySQL from here.
- Apache: A web server that handles the HTTP requests and responses. You can download Apache from here.
- Alternatively, you can install a pre-configured package that includes PHP, MySQL and Apache, such as XAMPP or WampServer. You can download XAMPP from here.

## Installation

To install this application, follow these steps:

1. Clone the repository from GitHub using the following command:
   `git clone https://github.com/AdityaSeth777/PymPay.git`

2. Move the cloned folder to the subdirectory htdocs of your web server. For example, if you are using XAMPP, the path would be `C:\xampp\htdocs\pympay`.

3. Create a new database in MySQL using phpMyAdmin or any other tool. Name it `adidev_pympay`.

4. Import the SQL file `adidev_pympay.sql` from the cloned folder to the newly created database. This file contains the schema and some sample data for the application.

5. Open the file `config.php` from the cloned folder and edit the following variables according to your database settings:

```
// Database name
$dbname = "adidev_pympay";

// Database user
$dbuser = "root";

// Database password
$dbpass = "";

// Database host
$dbhost = "localhost";
```

Save the file and close it.

## Usage (Login and Registration)

To use this application, follow these steps:

1. Open `XAMPP Control Panel` and start the `Apache` and `MySQL` services.

2. Open a web browser. Go to the URL `https://pympay-adi.netlify.app/`, and click on `Login`.

3. You will see a homepage and then a login page where you can enter your username and password to access the application.

The following table shows some sample credentials for each role that you can use to log in:

### Roles and Credentials

| Role   | Username                 | Password |
| ------ | ------------------------ | -------- |
| Admin  | sysadmin@pympay.com      | admin    |
| Client | adityaseth.cse@gmail.com | 12345    |
| Staff  | staff@pympay.com         | demo     |

In case of new registrations, just the client access is available right now.

## Usage (Roles and Credentials)

1. Depending on your role, you will see different options and features in the application.

2. The application has three roles: admin, client and staff. Each role has different permissions and functionalities in the application.

3. The application has various features for each role, such as:

- Admin: Manage users, view transactions, generate reports, etc.
- Client: Deposit money, withdraw money, transfer money, check balance, view transactions, etc.
- Staff: Assist clients, view transactions, etc.

To log out, click on the logout button on the top right corner of the page.

## For contributing

Check the [Contributing page.](https://github.com/AdityaSeth777/PymPay/blob/master/Contributing.md)
Make sure to PR your changes in the development branch.

## .env file

This file contains various environment variables that you can configure.

## License

[MIT © Aditya Seth](https://github.com/AdityaSeth777/PymPay/blob/main/LICENSE)

## What next?

I will be improving this project.

## Where to contact ?

Contact: [adityaseth.cse@gmail.com]

## 🙋‍♂️ Support

💙 If you like this project, give it a ⭐ and share it with friends!<br><br>
[☕ Buy me a coffee](https://www.buymeacoffee.com/adityaseth)

---

Made with ❤️ and PHP - JavaScript <br><br>

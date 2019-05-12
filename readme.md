# parkinglot_js
Parkinglot_js is a frontend of parkinglot SAAS application which allow user to create, manage, maintain and rent parking spaces to the user. Owner can set custom prices based on duration (days, hour), pre paid charges and over due charge. User can rent parking place and also they can see all reservations. Application based on angularjs.

Requirements
------------

* **nodejs**: v8.10.0+
* **npm**: 3.5.2+
* **grunt-cli**: 2.0+

Installation
------------

Install in local machine:

Install global requirement like nodejs, npm and grunt-cli

.. code-block:: sh

    sudo apt-get install nodejs

    sudo apt-get install npm

    sudo apt-get install grunt

    npm install -g grunt-cli

Redirect to project folder from shell/terminal. Install dependancies

.. code-block:: sh

    npm install

Activate environment

.. code-block:: sh

    grunt

Configure API configuration in app/app.constant.js

`DOMAIN = <server_ip_link>`

To create build package use following command

.. code-block:: sh

    grunt prod

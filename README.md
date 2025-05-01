# bun-app

To install dependencies:

```bash
node install
```

To run:

```bash
node app.js
```

## steps
1) We need to start the EC2 instance and pull the code, instead of using Node and PM2.

2) We need to generate the image (the image should include everything mentioned above), but it's not running; it only shows a snapshot of the above things.

3) We need to create a launch template (here, we need to specify the security groups, EC2 machine type, secret file, RAM, and everything required to start the instance).

From the EC2 instance, we created the image, and from the image, we created the launch template.
const Notification = require("../models/notification.model");

/**
 * Controller to create the notification
 * 
 * Validation of the notification request body, should be written at
 * : middleware
 */
exports.acceptNotificationRequest = async (req, res) => {

    /**
         * Create notificationObj to be inserted based on the req body
         */
     const notificationObj = {
        subject: req.body.subject,
        recepientEmails: req.body.recepientEmails,
        content: req.body.content,
        requester: req.body.requester,
        status: req.body.status
    };

    Notification.create(notification)
    .then((notification) => {
      console.log(
        "Notification is added in the Database with name",
        Notification.content
      );
      res.status(201).send(notification);
    })
    .catch((err) => {
      console.log(
        "Error while adding the Company with name ",
        notification.subject
      );
      res.status(500).send({
        message: "Some internal error happened",
      });
    });


}



/**
 * Controller to fetch the notification details based on 
 * the notification id
 */

exports.getNotificationDetails = async (req, res) => {

    try {
        const trackingId = req.params.id;

        const notificaton = await Notification.findOne({ _id: trackingId });

        res.status(200).send(notificaton);
    } catch (err) {
        console.log("Error while retrieving the notification ", err.message);
        res.status(500).send({
            message: "Internal server error "
        });
    }
}
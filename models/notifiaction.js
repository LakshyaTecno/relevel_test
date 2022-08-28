// module.exports = (sequelize, Sequelize) => {
//     const DataTypes = Sequelize.DataTypes;
//     const User = sequelize.define('Notification', {
//         subject: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       recepientEmails: {
//         type: DataTypes.STRING,
//         allowNull: false
//       },
//       content: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       requester: {
//         type: DataTypes.STRING,
//       },
//       status: {      
//         type: Sequelize.ENUM("pending", "active", "disabled"),

//       }
//     });
//     return Notification;
//   };
  
//   /*
//   create table users(
//     name varchar(50), 
//     email varchar(50), 
//     password varchar(50), 
//     location varchar(100), 
//     date datetime, 
//     createdAt datetime, 
//     updatedAt datetime, 
//     id int auto_increment,
//     primary key(id)
//     );
//   */
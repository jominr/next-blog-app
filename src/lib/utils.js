import mongoose from "mongoose"

// 参考：https://mongoosejs.com/docs/connections.html

const connection = {};

export const connectToDB = async() => {
  try {
    // 避免重新创建一个数据库连接，以防数据库连接池打满
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error('Error connecting to database')
  }
}
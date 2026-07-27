import User from '../models/User.js';

const userService = {
  getAllUsers: async () => {
    return await User.find();
  },

  getUserById: async id => {
    return await User.findById(id);
  },

  getUserByName: async name => {
    return await User.find({ name: name });
  },

  createUser: async (name, age, phone) => {
    const user = new User({ name, age, phone });
    return await user.save();

    // return await User.create({
    //   name,
    //   age,
    //   phone,
    // });
  },

  updateUser: async (id, name, age, phone) => {
    return await User.findByIdAndUpdate(
      id,
      {
        // $set -> ถ้าข้อมูลไหนไม่ได้ส่งมา ไม่ต้อง update
        $set: {
          name,
          age,
          phone,
        },
      },
      // ให้ return response ออกมาเป็นข้อมูลใหม่
      { new: true },
    );
  },

  deleteUser: async id => {
    return await User.findByIdAndDelete(id);
  },
};

export default userService;

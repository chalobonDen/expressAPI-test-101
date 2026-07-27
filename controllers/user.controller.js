import userService from '../services/user.service.js';

const userController = {
  getAllUser: async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.log('Error fetching users:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await userService.getUserById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      console.log('Error fetching user by ID:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  createUser: async (req, res) => {
    try {
      const { name, age, phone } = req.body;
      const newUser = await userService.createUser(name, age, phone);
      res.status(201).json(newUser);
    } catch (error) {
      console.log('Error creating user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  updateUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const { name, age, phone } = req.body;
      const updateUser = await userService.updateUser(userId, name, age, phone);
      res.status(200).json(updateUser);
    } catch (error) {
      console.log('Error updating user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const deleteUser = await userService.deleteUser(userId);
      if (!deleteUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.log('Error deleting user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

export default userController;

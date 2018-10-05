const todoStore = require('./todoStore');
todoStore.methods(['get', 'post', 'put', 'delete']);
todoStore.updateOptions({ new: true, runValidators: true });

module.exports = todoStore;
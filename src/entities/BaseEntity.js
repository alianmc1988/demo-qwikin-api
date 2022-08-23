class BaseEntity {
  constructor() {
    this.id = new Date().getTime().toString();
  }
}

module.exports = BaseEntity;

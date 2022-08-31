class RaitingsEntity extends Entity {
  constructor({ database }) {
    super(database, "ratings", {
      relations: ["user", "movie"],
    });
  }
}

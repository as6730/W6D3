
class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();

    this.$el.on('click', this.handleClick.bind(this));
  }

  handleClick(event) {
    const followToggle = this;
    event.preventDefault();

    if (this.followState === "unfollowed") {
      $.ajax({
        url: `/users/${this.userId}/follow`,
        type:'POST',
        dataType: 'json',
        success() {
          followToggle = "unfollowed";
          followToggle.render();
        }
      });
    } else {
      $.ajax({
        url: `/users/${this.userId}/follow`,
        type:'DELETE',
        dataType: 'json',
        success() {
          followToggle = "follow";
          followToggle.render();
        }
      });
    }
  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.text('Follow');
    } else {
      this.$el.text("Unfollow");
    }
  }
}

module.exports = FollowToggle;

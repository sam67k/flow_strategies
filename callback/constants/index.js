exports.REQUEST_STATUS = {
  pending: "Pending",
  accepted: "Accepted",
  rejected: "Rejected",
  cancelled: "Cancelled",
};

exports.EVENT_OCCURRENCE_TYPES = {
  once: "Once",
  repeating: "Repeating",
};

exports.EVENT_INVITE_RESPONSE_STATUS = {
  going: "Going",
  notGoing: "Not Going",
  maybe: "Maybe",
};

exports.FEED_SHARING_TYPES = {
  all: "All",
  connections: "Connections",
  specific: "Specific",
  specificAndConnections: "Specific and Connections",
  community: "Community",
};

exports.FEED_TYPES = {
  post: "Post",
  private: "Private",
  public: "Public",
  place: "Place",
  media: "Media",
};

exports.FEED_MEDIA_TYPES = {
  event: "Event",
  class: "Class",
  place: "Place",
  media: "Media",
};

exports.MEDIA_TYPES = {
  cover: "Cover",
  promotional: "Promotional",
  other: "Other",
};

exports.SHARED_WITH_TYPES = {
  member: "Member",
  community: "Community",
};

exports.DATE_TIME_FORMATS = {
  usDate: "MM/DD/YYYY",
  dateTime: "MM/DD/YYYY hh:mm A",
  completionDate: "MMMM YYYY",
};

exports.PROFILE_CONNECTION_STATUS = {
  connect: "Connect",
  connectionRequested: "Connection Requested",
  connected: "Connected",
};

exports.NOTIFICATION_TYPE = {
  connectionRequest: "Connection Request",
  connectionRequestAccepted: "Connection Request Accepted",
  connectionRequestRejected: "Connection Request Rejected",
  communityRequest: "Community Request",
  communityAdminRequest: "Community Admin Request",
  communityAdminRequestAccepted: "Community Admin Request Accepted",
  communityAdminRequestRejected: "Community Admin Request Rejected",
  communityInvite: "Community Invite",
  communityInviteAccepted: "Community Invite Accepted",
  communityRequestAccepted: "Community Request Accepted",
  communityRequestRejected: "Community Request Rejected",
  removedFromCommunity: "Removed From Community",
  communityPost: "Community Post",
  like: "Like",
  commentlike: "Comment Like",
  comment: "Comment",
  attendingEvent: "Attending Event",
  eventInvite: "Event Invite",
  eventCanceled: "Event Canceled",
  eventUpdated: "Event Updated",
  locationAdminRequest: "Location Admin Request",
  locationAdminRequestAccepted: "Location Admin Request Accepted",
  forwardedFeed: "Forwarded Feed",
  addedPhoto: "Added Photo",
  photoFlagged: "Photo Flagged",
};

exports.ACCOUNT_REMOVAL_TYPES = {
  deactivate: "Deactivate",
  delete: "Delete",
};

exports.KULA_STORE_URL = "https://tosto.re/kula";

exports.DOWNLOAD_APP = `Download the Kula app here to get connected: ${exports.KULA_STORE_URL}`;

exports.CHECKIN_TYPES = {
  place: "Place",
  event: "Event",
  create: "Create",
};

exports.PROFILE_EDIT_TYPES = {
  profile: "Profile",
  image: "Image",
  certification: "Certification",
};

exports.USER_CONNECTION_INTERACTION_TYPES = {
  like: "Like",
  showUp: "Show Up",
  chatReply: "Chat Reply",
  creatorLikesPostReply: "Creator Likes Post Reply",
  connect: "Connected",
  commonCommunity: "Common Community",
  addToCalendar: "Add To Calendar",
};

exports.USER_CONNECTION_INTERACTION_PRIORITIES = {
  low: "Low",
  medium: "Medium",
  high: "High",
};

exports.ADD_TO_CALENDAR_SCREENS = {
  feeds: "Feeds",
  details: "Details",
  userProfileCalendar: "User Profile Calendar",
  studioProfileCalendar: "Studio Profile Calendar",
  suggestions: "Suggestions",
  search: "Search",
};

exports.ALL_ADD_TO_CALENDAR_SCREENS = [
  exports.ADD_TO_CALENDAR_SCREENS.feeds,
  exports.ADD_TO_CALENDAR_SCREENS.details,
  exports.ADD_TO_CALENDAR_SCREENS.userProfileCalendar,
  exports.ADD_TO_CALENDAR_SCREENS.studioProfileCalendar,
  exports.ADD_TO_CALENDAR_SCREENS.suggestions,
  exports.ADD_TO_CALENDAR_SCREENS.search,
];

exports.ALLOWED_ADD_TO_CALENDAR_SCREENS = [
  exports.ADD_TO_CALENDAR_SCREENS.feeds,
  exports.ADD_TO_CALENDAR_SCREENS.userProfileCalendar,
];

exports.UPPERCASE_ALPHANUMERIC_CHARACTERS =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

exports.CODE_LENGTH = 6;

exports.MAX_TIME_DIFFERENCE_SECONDS = 30;

exports.WEB_VIEW_URL_STAGING = "https://kula-go-dev.web.app";

exports.WEB_VIEW_URL_PRODUCTION = "https://kula-go.web.app";

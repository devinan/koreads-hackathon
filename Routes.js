// Global
const START = "/start";
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// User
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Settings
const SETTINGS = "/settings";
const INTEREST = "/interest";
const NOTIFICATION = "/notification";

// Help
const REQUSETS = "/requests";
const UPLOAD_REQUEST = "/upload";
const REQUSET_DETAIL = "/:id";
const NEXT_REQUSET = "/:id/next";
const FINISH_REQUEST = "/:id/finish";

// Books
const BOOKS = "/books";
const BOOK_DETAIL = "/:id";

// Bookmark
const BOOKMARKS = "/bookmarks";
const BOOKMARK_DETAIL = "/:id";
const DELETE_BOOKMARK = "/:id/delete";

const routes = {
  start: START,
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  settings: SETTINGS,
  interest: INTEREST,
  notification: NOTIFICATION,
  requests: REQUSETS,
  uploadRequest: UPLOAD_REQUEST,
  requestDetail: REQUSET_DETAIL,
  nextRequest: NEXT_REQUSET,
  finishRequest: FINISH_REQUEST,
  books: BOOKS,
  bookDetail: BOOK_DETAIL,
  bookmarks: BOOKMARKS,
  bookmarkDetail: BOOKMARK_DETAIL,
  deleteBookmark: DELETE_BOOKMARK
};

export default routes;

// Global

const ROOT = "/";
const HOME = "/home";
const START = "/start";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";
const SETTINGS = "/settings";
const INTEREST = "/interest";
const NOTIFICATION = "/notification";

// User

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Help

const HELP = "/help";

// Request

const REQUESTS = "/requests";
const UPLOAD_REQUEST = "/upload";
const REQUEST_DETAIL = "/:id";
const NEXT_REQUEST = "/next";
const FINISH_REQUEST = "/finish";

// Books

const BOOKS = "/books";
const BOOK_DETAIL = "/:id";

// Bookmark

const BOOKMARKS = "/bookmarks";
const BOOKMARK_DETAIL = "/:id";
const DELETE_BOOKMARK = "/:id/delete";

const routes = {
  root: ROOT,
  start: START,
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  settings: SETTINGS,
  interest: INTEREST,
  notification: NOTIFICATION,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  help: HELP,
  requests: REQUESTS,
  uploadRequest: UPLOAD_REQUEST,
  requestDetail: REQUEST_DETAIL,
  nextRequest: NEXT_REQUEST,
  finishRequest: FINISH_REQUEST,
  books: BOOKS,
  bookDetail: BOOK_DETAIL,
  bookmarks: BOOKMARKS,
  bookmarkDetail: BOOKMARK_DETAIL,
  deleteBookmark: DELETE_BOOKMARK
};

export default routes;

var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'dir': '_m0/0', 'linked': 2, 'len': 3549 },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'dir': '_m0/1', 'linked': 5, 'len': 1806 },
    { 'url': 'http://127.0.0.1:8000/bank/logout', 'dir': '_m0/2', 'linked': 2, 'len': 1207 },
    { 'url': 'http://127.0.0.1:8000/bank/password_reset', 'dir': '_m0/3', 'linked': 5, 'len': 1742 },
    { 'url': 'http://127.0.0.1:8000/bank/przelew', 'dir': '_m0/4', 'linked': 5, 'len': 2513 },
    { 'url': 'http://127.0.0.1:8000/static/', 'dir': '_m0/5', 'linked': 2, 'len': 1634 } ]
  },
  { 'mime': 'text/css', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/admin/css/base.css/', 'dir': '_m1/0', 'linked': 2, 'len': 16378 },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/forms.css/', 'dir': '_m1/1', 'linked': 2, 'len': 8518 },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/login.css/', 'dir': '_m1/2', 'linked': 2, 'len': 1233 },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/responsive.css/', 'dir': '_m1/3', 'linked': 2, 'len': 17944 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://127.0.0.1:8000/bank/przelew', 'dir': '_m2/0', 'linked': 2, 'len': 1163 },
    { 'url': 'http://127.0.0.1:8000/bank/', 'dir': '_m2/1', 'linked': 5, 'len': 189 },
    { 'url': 'http://127.0.0.1:8000/bank/login', 'dir': '_m2/2', 'linked': 5, 'len': 646 },
    { 'url': 'http://127.0.0.1:8000/bank/login', 'dir': '_m2/3', 'linked': 5, 'len': 729 },
    { 'url': 'http://127.0.0.1:8000/bank/signup', 'dir': '_m2/4', 'linked': 5, 'len': 1607 },
    { 'url': 'http://127.0.0.1:8000/bank/', 'dir': '_m2/5', 'linked': 2, 'len': 138 },
    { 'url': 'http://127.0.0.1:8000/password_reset/done/', 'dir': '_m2/6', 'linked': 2, 'len': 147 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/', 'dir': '_m3/0', 'linked': 2, 'len': 59 } ]
  }
];

var issue_samples = [
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://127.0.0.1:8000/bank/password_reset', 'extra': '', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://127.0.0.1:8000/bank/przelew', 'extra': '', 'sid': '0', 'dir': '_i0/1' },
    { 'url': 'http://127.0.0.1:8000/password_reset/', 'extra': '', 'sid': '0', 'dir': '_i0/2' } ]
  },
  { 'severity': 1, 'type': 20301, 'samples': [
    { 'url': 'http://127.0.0.1:8000/bank/przelew', 'extra': '', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 1, 'type': 20205, 'samples': [
    { 'url': 'http://127.0.0.1:8000/bank/przelew', 'extra': '', 'sid': '0', 'dir': '_i2/0' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://127.0.0.1:8000/admin/jsi18n/', 'extra': '', 'sid': '0', 'dir': '_i3/0' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://127.0.0.1:8000/static/admin/', 'extra': '', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/', 'extra': '', 'sid': '0', 'dir': '_i4/2' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/base.css/', 'extra': '', 'sid': '0', 'dir': '_i4/3' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/forms.css/', 'extra': '', 'sid': '0', 'dir': '_i4/4' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/login.css/', 'extra': '', 'sid': '0', 'dir': '_i4/5' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/responsive.css/', 'extra': '', 'sid': '0', 'dir': '_i4/6' } ]
  },
  { 'severity': 0, 'type': 10802, 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://127.0.0.1:8000/static/admin/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i5/2' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://127.0.0.1:8000/bank/login', 'extra': '', 'sid': '0', 'dir': '_i6/1' },
    { 'url': 'http://127.0.0.1:8000/bank/login', 'extra': '', 'sid': '0', 'dir': '_i6/2' },
    { 'url': 'http://127.0.0.1:8000/bank/signup', 'extra': '', 'sid': '0', 'dir': '_i6/3' },
    { 'url': 'http://127.0.0.1:8000/login/', 'extra': '', 'sid': '0', 'dir': '_i6/4' } ]
  },
  { 'severity': 0, 'type': 10505, 'samples': [
    { 'url': 'http://127.0.0.1:8000/bank/przelew', 'extra': 'odbiorca', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://127.0.0.1:8000/bank/przelew', 'extra': 'rachunek', 'sid': '0', 'dir': '_i7/1' },
    { 'url': 'http://127.0.0.1:8000/bank/przelew', 'extra': 'kwota', 'sid': '0', 'dir': '_i7/2' },
    { 'url': 'http://127.0.0.1:8000/bank/przelew', 'extra': 'data', 'sid': '0', 'dir': '_i7/3' },
    { 'url': 'http://127.0.0.1:8000/bank/przelew', 'extra': 'tytul', 'sid': '0', 'dir': '_i7/4' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://127.0.0.1:8000/admin/auth/', 'extra': '', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://127.0.0.1:8000/admin/auth/user/', 'extra': '', 'sid': '0', 'dir': '_i8/1' },
    { 'url': 'http://127.0.0.1:8000/admin/bank/', 'extra': '', 'sid': '0', 'dir': '_i8/2' },
    { 'url': 'http://127.0.0.1:8000/admin/jsi18n/', 'extra': '', 'sid': '0', 'dir': '_i8/3' },
    { 'url': 'http://127.0.0.1:8000/admin/logout/', 'extra': '', 'sid': '0', 'dir': '_i8/4' },
    { 'url': 'http://127.0.0.1:8000/bank/signup', 'extra': '', 'sid': '0', 'dir': '_i8/5' },
    { 'url': 'http://127.0.0.1:8000/logout/', 'extra': '', 'sid': '0', 'dir': '_i8/6' } ]
  },
  { 'severity': 0, 'type': 10403, 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': '', 'sid': '0', 'dir': '_i9/0' },
    { 'url': 'http://127.0.0.1:8000/static/admin/', 'extra': '', 'sid': '0', 'dir': '_i9/1' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/', 'extra': '', 'sid': '0', 'dir': '_i9/2' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://127.0.0.1:8000/bank/przelew', 'extra': '', 'sid': '0', 'dir': '_i10/0' },
    { 'url': 'http://127.0.0.1:8000/bank/przelew', 'extra': '', 'sid': '0', 'dir': '_i10/1' },
    { 'url': 'http://127.0.0.1:8000/bank/przelew', 'extra': '', 'sid': '0', 'dir': '_i10/2' },
    { 'url': 'http://127.0.0.1:8000/bank/przelew', 'extra': '', 'sid': '0', 'dir': '_i10/3' },
    { 'url': 'http://127.0.0.1:8000/bank/przelew', 'extra': '', 'sid': '0', 'dir': '_i10/4' },
    { 'url': 'http://127.0.0.1:8000/bank/przelew', 'extra': '', 'sid': '0', 'dir': '_i10/5' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://127.0.0.1:8000/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i11/0' },
    { 'url': 'http://127.0.0.1:8000/admin/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i11/1' },
    { 'url': 'http://127.0.0.1:8000/admin/auth/user/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i11/2' },
    { 'url': 'http://127.0.0.1:8000/admin/auth/user/sfi9876/', 'extra': '', 'sid': '0', 'dir': '_i11/3' },
    { 'url': 'http://127.0.0.1:8000/bank/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i11/4' },
    { 'url': 'http://127.0.0.1:8000/bank/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i11/5' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/base.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i11/6' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/forms.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i11/7' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/login.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i11/8' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/responsive.css/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i11/9' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i12/0' },
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i12/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'WSGIServer/0.2 CPython/3.6.9', 'sid': '0', 'dir': '_i13/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://127.0.0.1:8000/bank/logout', 'extra': 'sessionid', 'sid': '0', 'dir': '_i14/0' } ]
  }
];


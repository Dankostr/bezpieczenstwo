var res = {'data':'HTTP/1.1 403 Forbidden\x0aDate: Sun, 08 Dec 2019 18:01:53 GMT\x0aServer: WSGIServer/0.2 CPython/3.6.9\x0aContent-Type: text/html\x0aX-Frame-Options: SAMEORIGIN\x0aContent-Length: 2513\x0a\x0a\x0a\x3c!DOCTYPE html\x3e\x0a\x3chtml lang=\x22en\x22\x3e\x0a\x3chead\x3e\x0a  \x3cmeta http-equiv=\x22content-type\x22 content=\x22text/html; charset=utf-8\x22\x3e\x0a  \x3cmeta name=\x22robots\x22 content=\x22NONE,NOARCHIVE\x22\x3e\x0a  \x3ctitle\x3e403 Forbidden\x3c/title\x3e\x0a  \x3cstyle type=\x22text/css\x22\x3e\x0a    html * { padding:0; margin:0; }\x0a    body * { padding:10px 20px; }\x0a    body * * { padding:0; }\x0a    body { font:small sans-serif; background:#eee; color:#000; }\x0a    body\x3ediv { border-bottom:1px solid #ddd; }\x0a    h1 { font-weight:normal; margin-bottom:.4em; }\x0a    h1 span { font-size:60%; color:#666; font-weight:normal; }\x0a    #info { background:#f6f6f6; }\x0a    #info ul { margin: 0.5em 4em; }\x0a    #info p, #summary p { padding-top:10px; }\x0a    #summary { background: #ffc; }\x0a    #explanation { background:#eee; border-bottom: 0px none; }\x0a  \x3c/style\x3e\x0a\x3c/head\x3e\x0a\x3cbody\x3e\x0a\x3cdiv id=\x22summary\x22\x3e\x0a  \x3ch1\x3eForbidden \x3cspan\x3e(403)\x3c/span\x3e\x3c/h1\x3e\x0a  \x3cp\x3eCSRF verification failed. Request aborted.\x3c/p\x3e\x0a\x0a\x0a\x3c/div\x3e\x0a\x0a\x3cdiv id=\x22info\x22\x3e\x0a  \x3ch2\x3eHelp\x3c/h2\x3e\x0a    \x0a    \x3cp\x3eReason given for failure:\x3c/p\x3e\x0a    \x3cpre\x3e\x0a    CSRF token missing or incorrect.\x0a    \x3c/pre\x3e\x0a    \x0a\x0a  \x3cp\x3eIn general, this can occur when there is a genuine Cross Site Request Forgery, or when\x0a  \x3ca\x0a  href=\x22https://docs.djangoproject.com/en/2.2/ref/csrf/\x22\x3eDjango\x27s\x0a  CSRF mechanism\x3c/a\x3e has not been used correctly.  For POST forms, you need to\x0a  ensure:\x3c/p\x3e\x0a\x0a  \x3cul\x3e\x0a    \x3cli\x3eYour browser is accepting cookies.\x3c/li\x3e\x0a\x0a    \x3cli\x3eThe view function passes a \x3ccode\x3erequest\x3c/code\x3e to the template\x27s \x3ca\x0a    href=\x22https://docs.djangoproject.com/en/dev/topics/templates/#django.template.backends.base.Template.render\x22\x3e\x3ccode\x3erender\x3c/code\x3e\x3c/a\x3e\x0a    method.\x3c/li\x3e\x0a\x0a    \x3cli\x3eIn the template, there is a \x3ccode\x3e{% csrf_token\x0a    %}\x3c/code\x3e template tag inside each POST form that\x0a    targets an internal URL.\x3c/li\x3e\x0a\x0a    \x3cli\x3eIf you are not using \x3ccode\x3eCsrfViewMiddleware\x3c/code\x3e, then you must use\x0a    \x3ccode\x3ecsrf_protect\x3c/code\x3e on any views that use the \x3ccode\x3ecsrf_token\x3c/code\x3e\x0a    template tag, as well as those that accept the POST data.\x3c/li\x3e\x0a\x0a    \x3cli\x3eThe form has a valid CSRF token. After logging in in another browser\x0a    tab or hitting the back button after a login, you may need to reload the\x0a    page with the form, because the token is rotated after a login.\x3c/li\x3e\x0a  \x3c/ul\x3e\x0a\x0a  \x3cp\x3eYou\x27re seeing the help section of this page because you have \x3ccode\x3eDEBUG =\x0a  True\x3c/code\x3e in your Django settings file. Change that to \x3ccode\x3eFalse\x3c/code\x3e,\x0a  and only the initial error message will be displayed.  \x3c/p\x3e\x0a\x0a  \x3cp\x3eYou can customize this page using the CSRF_FAILURE_VIEW setting.\x3c/p\x3e\x0a\x3c/div\x3e\x0a\x0a\x3c/body\x3e\x0a\x3c/html\x3e\x0a1A'}
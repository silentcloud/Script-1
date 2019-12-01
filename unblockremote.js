var body = $response.body;
body = '\/*\n@supported 3B29A308CDEF E47CE6547430\n*\/\n' + body;

$done(body);

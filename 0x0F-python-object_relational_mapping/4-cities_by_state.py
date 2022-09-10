#!/usr/bin/python3
"""
Lists all states from the database hbtn_0e_0_usa.
Usage: ./4-cities_by_state.py <mysql username> \
                            <mysql password> \
                            <database name>
"""
import sys
import MySQLdb

if __name__ == "__main__":
    db = MySQLdb.connect(user=sys.argv[1],
                         passwd=sys.argv[2], db=sys.argv[3])
    c = db.cursor()
    c.execute('SELECT cities.id, cities.name, states.name FROM cities\
               JOIN states\
               ON cities.state_id = states.id\
               ORDER BY cities.id ASC')
    [print(state) for state in c.fetchall()]

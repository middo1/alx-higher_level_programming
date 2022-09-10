#!/usr/bin/python3
"""
Lists all states from the database hbtn_0e_0_usa.
Usage: ./5-filter_cities.py <mysql username> \
                            <mysql password> \
                            <database name> \
                            <state name>
"""
import sys
import MySQLdb

if __name__ == "__main__":
    db = MySQLdb.connect(user=sys.argv[1],
                         passwd=sys.argv[2], db=sys.argv[3])
    c = db.cursor()
    c.execute('SELECT cities.name FROM cities\
                   JOIN states\
                   ON cities.state_id = states.id\
                   WHERE states.name = %s\
                   ORDER BY states.id ASC', (sys.argv[4],))
    print(', '.join([state[0] for state in c.fetchall()]))

#!/usr/bin/python3
"""
Lists all states from the database hbtn_0e_0_usa.
Usage: ./2-my_filter_states.py <mysql username> \
                            <mysql password> \
                            <database name> \
                            <state name searched>
"""
import sys
import MySQLdb

if __name__ == "__main__":
    db = MySQLdb.connect(user=sys.argv[1],
                         passwd=sys.argv[2], db=sys.argv[3])
    c = db.cursor()
    c.execute("SELECT * FROM states \
               ORDER BY states.id ASC")
    [print(state) for state in c.fetchall() if state[1] == sys.argv[4]]
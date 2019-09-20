# Minesweeper

Test

I Have to create a minesweeper. The architecture will be a nodejs restfull server api (express) and fron-end with reactjs.

First step will be to create the express server with basic endpoints.

The idea is to have the Game with the following model:

```
{
    "gameId": 0.28410485215995873,
    "board": {
        "rows": 3,
          "cols": 3,
        "0.0": {
                "opened": false,
                "mined": false,
                "col": 0,
                "row": 0
        },
        "0.1": {
                "opened": false,
                "mined": false,
                "col": 1,
                "row": 0
        },
        "0.2": {
                "opened": false,
                "mined": false,
                "col": 2,
                "row": 0
        },
        "1.0": {
                "opened": false,
                "mined": true,
                "col": 0,
                "row": 1
        },
        "1.1": {
                "opened": false,
                "mined": false,
                "col": 1,
                "row": 1
        },
        "1.2": {
                "opened": false,
                "mined": false,
                "col": 2,
                "row": 1
        },
        "2.0": {
                "opened": false,
                "mined": false,
                "col": 0,
                "row": 2
        },
        "2.1": {
                "opened": false,
                "mined": false,
                "col": 1,
                "row": 2
        },
        "2.2": {
                "opened": false,
                "mined": false,
                "col": 2,
                "row": 2
        }
    }
}
```

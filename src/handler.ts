import add from './lib/add';
import subtract from './lib/subtract';

export async function get (event, context, callback) {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            sum: add(1, 2),
            diff: subtract(1, 2)
        })
    };
    callback(null, response);
};


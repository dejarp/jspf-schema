var fs = require('fs');
var Ajv = require('ajv');
var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

function runSchemaValidationTest(testName, testDescription, schemaFile, dataFile) {
    console.log('Running Test: ' + testName );
    console.log('   ' + testDescription);

    var schema = JSON.parse(fs.readFileSync(schemaFile, 'utf8'));
    var data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

    // compiling the schema will validate it against the latest JSON Schema spec draft.
    var validate = ajv.compile(schema);
    var valid = validate(data);
    
    if (!valid) {
        console.log('Test completed: failed');
        console.log(validate.errors);

        process.exit(1);
    } else {
        console.log('Test completed: success');
    }
}

runSchemaValidationTest(
    'JSPFSimplified',
    'Validate Simplified JSPF example from http://www.xspf.org/jspf/ against JSPF Schema',
    'jspf-schema.json',
    'tests/simplified.json');

runSchemaValidationTest(
    'JSPFComprehensive',
    'Validate Comprehensive JSPF example from http://www.xspf.org/jspf/ against JSPF Schema',
    'jspf-schema.json',
    'tests/comprehensive.json');

console.log('All tests passed')
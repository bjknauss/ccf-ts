const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
console.log('Reporter');
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new SpecReporter());

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    'jira-ticket-in-scope': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'jira-ticket-in-scope': ({scope}) => {
          return [
            scope?.match(/MCKORD-[0-9]+/g),
            `Scope must contain a JIRA ticket reference. Example: "feat(MCKORD-123): description"`,
          ];
        },
      },
    },
  ],
};

new CopyPlugin([
    {
        // Copy the binary Oracle DB driver to dist.
        from: path.resolve(__dirname, 'node_modules/oracledb/build'),
        to: 'node_modules/oracledb/build',
    },
])
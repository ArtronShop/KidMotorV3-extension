({
    name: "KidMotorV3", // Category Name
    description: "Extension for KidMotor V3",
    author: "IOXhop.com",
    category: "Signal Input/Output",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#27AE60", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "kidmotor_motor_forward",
        "kidmotor_motor_backward",
        "kidmotor_motor_turn_left",
        "kidmotor_motor_turn_right",
        "kidmotor_motor_move",
        "kidmotor_motor_wheel",
        "kidmotor_motor_stop",
		{
            xml: `
                <block type="kidmotor_motor">
                    <value name="value">
                        <shadow type="math_number">
                            <field name="VALUE">100</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="kidmotor_digital_write">
                    <value name="value">
                        <shadow type="math_number">
                            <field name="VALUE">1</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "kidmotor_digital_read",
        "kidmotor_analog_read"
    ]
});

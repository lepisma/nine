// Main script injected in pages

var disabled = false;
var masterListener = new window.keypress.Listener();
var listener = new window.keypress.Listener();

// Combo to enable/disable
masterListener.sequence_combo("up right down left up", function() {
    if (disabled) {
        listener.listen();
        console.log("Enabled nine");
    }
    else {
        listener.stop_listening();
        console.log("Disabled nine");
    }
    disabled = !disabled;
});

// Chording combos
// ---------------
// Misc
listener.register_combo({
    "keys": "num_0",
    "on_keydown": function() {
        ins(" ");
    },
    "prevent_default": true,
    "is_solitary": true
});

// TODO: Setup a counting combo for , . ? on num_decimal

listener.register_combo({
    "keys": "num_add",
    "on_keydown": function() {
        ins("back");
    },
    "prevent_default": true,
    "is_solitary": true
});

// Left keys
listener.register_combo({
    "keys": "num_4",
    "on_keyup": function() {
        ins("a");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_4 num_5",
    "on_keydown": function() {
        ins("s");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_4 num_6",
    "on_keydown": function() {
        ins("d");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_4 num_7",
    "on_keydown": function() {
        ins("q");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_4 num_8",
    "on_keydown": function() {
        ins("w");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_4 num_9",
    "on_keydown": function() {
        ins("e");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_4 num_1",
    "on_keydown": function() {
        ins("z");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_4 num_2",
    "on_keydown": function() {
        ins("x");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_4 num_3",
    "on_keydown": function() {
        ins("c");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

// Center keys
listener.register_combo({
    "keys": "num_5",
    "on_keyup": function() {
        ins("g");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_5 num_4",
    "on_keydown": function() {
        ins("f");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_5 num_6",
    "on_keydown": function() {
        ins("h");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_5 num_7",
    "on_keydown": function() {
        ins("r");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_5 num_8",
    "on_keydown": function() {
        ins("t");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_5 num_9",
    "on_keydown": function() {
        ins("y");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_5 num_1",
    "on_keydown": function() {
        ins("v");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_5 num_2",
    "on_keydown": function() {
        ins("b");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_5 num_3",
    "on_keydown": function() {
        ins("n");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

// Right keys
listener.register_combo({
    "keys": "num_6",
    "on_keyup": function() {
        ins("l");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_6 num_5",
    "on_keydown": function() {
        ins("k");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_6 num_4",
    "on_keydown": function() {
        ins("j");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_6 num_7",
    "on_keydown": function() {
        ins("u");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_6 num_8",
    "on_keydown": function() {
        ins("i");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_6 num_9",
    "on_keydown": function() {
        ins("o");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_6 num_1",
    "on_keydown": function() {
        ins("m");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

listener.register_combo({
    "keys": "num_6 num_2",
    "on_keydown": function() {
        ins("p");
    },
    "prevent_default": true,
    "is_solitary": true,
    "is_exclusive": true
});

function ins(ch) {
    var element = document.activeElement;

    if (ch === "back") {
        // TODO: Simulate backspace
        element.value = element.value.slice(0, -1);
    }
    else {
        // TODO: Simulate keyboard events
        element.value += ch;
    }
};

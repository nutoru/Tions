function processCommand() {
    let input = document.getElementById("user-input").value.toLowerCase();
    let responseBox = document.getElementById("response");
    
    let response = "I don't understand that command. Try again!";
    
    if (input.includes("generate code")) {
        response = "Here’s a simple JavaScript function:\n\n```javascript\nfunction sayHello() {\n  console.log('Hello, World!');\n}\n```";
    } else if (input.includes("recipe")) {
        response = "Try this recipe for pancakes:\n\n- 1 cup flour\n- 1 egg\n- 1 cup milk\n- 1 tbsp sugar\n- 1 tsp baking powder\n\nMix and cook on a hot pan!";
    } else if (input.includes("write content")) {
        response = "Here’s a sample blog post:\n\n**Title:** The Power of AI\n\nArtificial intelligence is transforming industries...";
    } else if (input.includes("hello")) {
        response = "Hello! How can I help you today?";
    } else if (input.includes("joke")) {
        response = "Why don't programmers like nature? It has too many bugs!";
    }

    responseBox.innerHTML = response;
}

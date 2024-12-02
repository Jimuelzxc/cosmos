function formatText(inputText) {

    // Convert bold text (surrounded by **) to <strong> HTML tag
  let formattedText = inputText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  formattedText = formattedText.replace(/\*(?!\*)(.*?)\*/g, '<em>$1</em>');


  // Convert numbered list (1️⃣, 2️⃣, etc.) to ordered list (<ol><li></li></ol>)
  formattedText = formattedText.replace(/(\d️⃣)/g, (match) => {
    return `<li>${match}</li>`;
  });

  
  // Add line breaks after each numbered item (after each list item, for better spacing)
  formattedText = formattedText.replace(/(<li>.*?<\/li>)/g, '$1\n<br/>');  // Add line breaks after each list item

  // Add a <br/> tag to separate main points (such as between paragraphs)
  formattedText = formattedText.replace(/([^\n]+)(?=\n)/g, '$1<br/>'); // Add line breaks between each section

  return formattedText;
}

export {formatText}

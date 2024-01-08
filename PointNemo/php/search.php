<!-- search.php -->
<?php
// Simulated data
$data = array(
    "Apple", "Banana", "Orange", "Grapes", "Strawberry", "Blueberry"
);

// Get the search query from the form
$query = isset($_GET['query']) ? $_GET['query'] : '';

// Filter data based on the search query
$results = array_filter($data, function ($item) use ($query) {
    return stripos($item, $query) !== false;
});

// Output the results
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Search Results</title>
  <link rel="stylesheet" href="quizzes.css">
</head>
<body>
  <div class="search-container">
  <form class="search-form" action="search.php" method="GET">
            <input type="text" class="search-bar" name="query" placeholder="Search the Array Network">
            <button class="search-button">
                <i class="gg-search"></i>
            </button>
        </form>
    <div class="results">
      <?php
      if ($query !== '') {
          if (empty($results)) {
              echo '<p>No results found.</p>';
          } else {
              echo '<p>Results:</p>';
              echo '<ul>';
              foreach ($results as $result) {
                  echo '<li>' . htmlspecialchars($result) . '</li>';
              }
              echo '</ul>';
          }
      }
      ?>
    </div>
  </div>
</body>
</html>

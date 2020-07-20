<ol id="todoView"></ol>
02
<div>
03
  Название: <input type="text" id="todo" value="" />
04
  <input type="button" id="add" value="Добавить" />
05
</div>
06
<script>
07
  var todos = []
08
  var todo = document.getElementById('todo')
09
  var todoView = document.getElementById('todoView')
10
 
11
  document.getElementById('add').addEventListener('click', function () {
12
    if (todos.filter(t => t.title === todo.value).length > 0) {
13
      alert('Такой todo уже есть')
14
    } else if (todo.value.length === 0) {
15
      alert('Название не может быть пустым')
16
    } else {
17
      var id = todos.length + 1
18
      todos.push({
19
        id,
20
        title: todo.value,
21
        complete: false
22
      })
23
 
24
      var li = document.createElement('li')
25
      var span = document.createElement('span')
26
      span.innerText = todo.value
27
      span.dataset.todo = id
28
 
29
      var checkbox = document.createElement('input')
30
      checkbox.type = 'checkbox'
31
      checkbox.todo = id
32
 
33
      checkbox.addEventListener('change', function (e) {
34
        var todo = todos.forEach(t => {
35
          if (t.id === e.target.todo) {
36
            var span = document.querySelector(`span[data-todo='${e.target.todo}']`)
37
            t.complete = !t.complete
38
            span && t.complete ? span.style.textDecoration = 'line-through' : span.style.textDecoration = 'none'
39
          }
40
        })
41
      })
42
 
43
      li.appendChild(checkbox)
44
      li.appendChild(span)
45
 
46
      todoView.appendChild(li)
47
      todo.value = ''
48
    }
49
  })
50
</script>

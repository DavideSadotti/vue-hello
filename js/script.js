var primo = new Vue(
  {
    el: '#root',
    data: {
      title: 'Hello Vue',
      text: 'This is my first time.',
      image: 'https://picsum.photos/200/300',
    },
    methods: {
      changeSizeImg: function() {
        if(this.image == 'https://picsum.photos/200/300'){
          this.image = 'https://picsum.photos/400/600';
        }else{
          this.image = 'https://picsum.photos/200/300';
        }
      }
    }
  }
)

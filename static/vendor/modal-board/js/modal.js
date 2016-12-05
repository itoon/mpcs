(function() {
    var url = window.location.origin;
    getBoard();
    var boardItems = [];
    // var boardItems = [
    //     {
    //         "id": "1",
    //         "name": "Achitectures",
    //         "image": "https://s-media-cache-ak0.pinimg.com/200x150/1a/1f/ce/1a1fce4fb536791dac766c998d01d2d3.jpg",
    //     },
    //     {
    //         "id": "2",
    //         "name": "Furnitures",
    //         "image": "https://s-media-cache-ak0.pinimg.com/200x150/ca/50/23/ca5023c5730a87e64cca837c87214fa6.jpg",
    //     },
    //     {
    //         "id": "3",
    //         "name": "Garden",
    //         "image": "https://s-media-cache-ak0.pinimg.com/200x150/8d/11/c5/8d11c55c86fe2ef785be13572a7301ae.jpg",
    //     },
    //     {
    //         "id": "4",
    //         "name": "Home Decor",
    //         "image": "https://s-media-cache-ak0.pinimg.com/200x150/20/91/ac/2091ac788f2ffc6161ea74fce9f28120.jpg",
    //     },
    //     {
    //         "id": "5",
    //         "name": "Icons",
    //         "image": "https://s-media-cache-ak0.pinimg.com/200x150/69/af/cb/69afcbf543cf908f9cfa3d05fa4a1794.jpg",
    //     },
    //     {
    //         "id": "6",
    //         "name": "INFOGRAPHICS",
    //         "image": "https://s-media-cache-ak0.pinimg.com/200x150/59/45/52/594552a3937104406b15ef8911f8f5a6.jpg",
    //     },
    //     {
    //         "id": "6",
    //         "name": "Informative Sources",
    //         "image": "https://s-media-cache-ak0.pinimg.com/200x150/55/1a/17/551a17a912202268214ce62647d44573.jpg",
    //     },
    //     {
    //         "id": "7",
    //         "name": "Inspiration designs",
    //         "image": "https://s-media-cache-ak0.pinimg.com/200x150/fa/48/27/fa48278bfc0663711ec10ca67b601d27.jpg",
    //     },
    //     {
    //         "id": "8",
    //         "name": "Logo Designs",
    //         "image": "https://s-media-cache-ak0.pinimg.com/200x150/26/fc/51/26fc51868c8a87153d7109c74c354bfb.jpg",
    //     },
    //     {
    //         "id": "9",
    //         "name": "Mobile Apps",
    //         "image": "https://s-media-cache-ak0.pinimg.com/200x150/9c/b9/dd/9cb9dd6c5ed44c494341668b8abdd9fa.jpg",
    //     },
    //     {
    //         "id": "10",
    //         "name": "Packaging",
    //         "image": "https://s-media-cache-ak0.pinimg.com/200x150/b9/58/3d/b9583d4c0f56269ebfbce5635e0e4d12.jpg",
    //     }
    // ];
    // console.log(boardItems);

    var sbItem = {
        "id": "",
        "title": "",
        "image": "",
        "thumb": "",
        // "url": "https://gospacebar-prod.appspot.com/story/@imydesign/marvelous-studio-D58KMV",
        "author": "",
    }



    var inputBoardName = '';
    var cardID = '';
    var cardData = '';

    this.ModalBoard = function() {
        this.closeButton = null;
        this.modal = null;
        this.overlay = null;
        
        this.transitionEnd = transitionSelect();

        var defaults = {
            className: 'sb-modal-default',
            closeButton: true,
            overlay: true
        }

        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        }
    }

    ModalBoard.prototype.open = function() {
        // Build out our Modal
        buildModal.call(this);

        /*
         * After adding elements to the DOM, use getComputedStyle
         * to force the browser to recalc and recognize the elements
         * that we just added. This is so that CSS animation has a start point
         */
        window.getComputedStyle(this.modal).height;

        /*
         * Add our open class and check if the modal is taller than the window
         * If so, our anchored class is also applied
         */
        this.modal.className = this.modal.className + 
            (this.modal.offsetHeight > window.innerHeight ? " sb-open sb-anchored" : " sb-open");
        this.overlay.className = this.overlay.className + " sb-open";
    }

    ModalBoard.prototype.close = function() {
        // Store the value of this
        var self = this;

        // Remove the open class name
        this.modal.className = this.modal.className.replace(" sb-open", "");
        this.overlay.className = this.overlay.className.replace(" sb-open", "");

        /*
        * Listen for CSS transitionend event and then
        * Remove the nodes from the DOM
        */
        // console.log(self.modal);
        this.modal.addEventListener(this.transitionEnd, function() {
            // self.modal.parentNode.removeChild(self.modal);
            if(self.modal.parentNode) self.modal.parentNode.removeChild(self.modal);
        });
        this.overlay.addEventListener(this.transitionEnd, function() {
            if(self.overlay.parentNode) self.overlay.parentNode.removeChild(self.overlay);
        });
    }

    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }

    function buildModal() {
        var contentHolder, documentFragment;
        // Create a DocumentFragment to build with
        documentFragment = document.createDocumentFragment();

        // Create modal element
        this.modal = document.createElement("div");
        this.modal.className = "sb-modal " + this.options.className;

        // If closeButton option is true, add a close button
        if (this.options.closeButton === true) {
            this.closeButton = document.createElement("button");
            this.closeButton.className = "sb-close close-button";
            this.closeButton.innerHTML = "×";
            this.modal.appendChild(this.closeButton);
        }

        // If overlay is true, add one
        if (this.options.overlay === true) {
            this.overlay = document.createElement("div");
            this.overlay.className = "sb-overlay " + this.options.className;
            documentFragment.appendChild(this.overlay);
        }

        // Create content area and append to modal
        contentHolder = document.createElement("div");
        contentHolder.className = "sb-content";
        this.modal.appendChild(contentHolder);

        // Append modal to DocumentFragment
        documentFragment.appendChild(this.modal);

        // Append DocumentFragment to body
        document.body.appendChild(documentFragment);
        buildModalContent();
    }

    function transitionSelect() {
        var el = document.createElement("div");
        if (el.style.WebkitTransition) return "webkitTransitionEnd";
        if (el.style.OTransition) return "oTransitionEnd";
        return 'transitionend';
    }

    function isBoardSearch(isSearch) {
        isSearch = isSearch ? isSearch : false;
        var boardPicker = $('.board-picker');
        var sectionTop = $('.board-picker .section-top');
        var sectionSearch = $('.board-picker .section-body .board-search');
        var sectionBottom = $('.board-picker .section-bottom');

        var allBoardHeaing = $('.all-board-heading');
        var searchCreate = $('.board-picker .search-create');
        var boardListHeight = boardPicker.outerHeight() - (sectionTop.outerHeight() + sectionSearch.outerHeight());
        if (!isSearch) {
            allBoardHeaing.css('display', '');
            searchCreate.removeClass('is-search');
            sectionBottom.css('display', '');
            $('.board-list').height(boardListHeight - sectionBottom.outerHeight());
        } else {
            allBoardHeaing.css('display', 'none');
            searchCreate.addClass('is-search');
            sectionBottom.css('display', 'none');
            $('.board-list').height(boardListHeight);
        }

        var transitionEnd = transitionSelect();
        // do action after modal transition end
        document.querySelector('.sb-modal').addEventListener(transitionEnd, function() {
            boardListHeight = boardPicker.outerHeight() - (sectionTop.outerHeight() + sectionSearch.outerHeight());
            if (!isSearch) {
                $('.board-list').height(boardListHeight - sectionBottom.outerHeight());
            } else {
                $('.board-list').height(boardListHeight);
            }
        });
    }

    function buildBoardItems(data) {
        var items = '';
        var myBoardItems = $('.board-list .board-items');                
        if(data.length > 0){
            data.forEach(function(item) {
                items += '<li class="item" data-board-id="'+item.id+'">'
                        + '<div class="board-label">'
                            + '<button class="save-to-board" type="button">'
                                + '<img src="'+url+'/static/imgs/save.png" alt="">'                            
                            + '</button>'
                            + '<div class="board-image" style="background-image:url('+item.image+')"></div>'
                            + '<span class="board-name">'+item.name+'</span>'
                        + '</div>'
                    + '</li>\n';
            });
        }else{
            items = '<li><span style="padding:7px 25px;">No Board Now</span><li>';
        }  
        // myBoardItems.innerHTML = items;
        return items;
    }
    
    function buildModalContent() {
        var modal_wrapper = $('.sb-content');
        var modal_left = '<div class="content-column content-left"></div>';
        var modal_right = '<div class="content-column content-right"></div>';

        var modal_board = '<div class="modal-board"></div>';
        var modal_card = '<div class="modal-card"><div class="modal-card-inner"></div></div>'
        // var modal_card = buildModalCard(cardData);
        // var modal_card = buildModalCard();
        var modal_picker = buildModalPicker(buildBoardItems(boardItems));

        modal_board = $(modal_board).append(modal_picker);
        modal_left = $(modal_left).append(modal_card);
        modal_right = $(modal_right).append(modal_board);

        modal_wrapper.append(modal_left);
        modal_wrapper.append(modal_right);
        
        isBoardSearch(false);
    }
    function buildModalCard(data) {
        var content = '<div class="space-card">'
                + '<div class="thumbnail">'
                    + '<div class="height-200 bg-cover" style="background-color: #333;background-image: url('+data.image+');"></div>'
                + '</div>'
                + '<div class="space-meta">'
                    + '<h4 class="title">'+data.title+'</h4>'
                    + '<p class="author">'+data.author+'</p>'
                + '</div>'
            + '</div>';
        return content;
    }
    function buildModalPicker(boardItems) {
        var content = '<div class="board-picker">'
                + '<div class="section-top">'
                    + '<div class="title-wrapper">'
                        + '<h1 class="modal-heading">Choose board</h1>'
                    + '</div>'
                + '</div>'
                + '<div class="section-body">'
                    + '<div class="board-select">'
                        + '<div class="board-search">'
                            + '<div class="search-icon"><i class="fa fa-search" aria-hidden="true"></i></div>'
                            + '<label>'
                                + '<input autocomplete="off" class="board-input" name="search_board_name" placeholder="Search">'
                            + '</label>'
                        + '</div>'
                        + '<div class="board-list">'
                            + '<div class="all-board-heading">All boards</div>'
                            + '<ul class="board-items">'+boardItems+'</ul>'
                            + '<div class="search-create">'
                                + '<div class="create-board create-board-item">'
                                    + '<span class="button-icon"><i class="fa fa-plus" aria-hidden="true"></i></span> '
                                    + '<span class="create-label">Create: </span>'
                                    + '<span class="create-name"></span>'
                                + '</div>'
                            + '</div>'
                        + '</div>'
                    + '</div>'
                + '</div>'
                + '<div class="section-bottom">'
                    + '<div class="create-board">'
                        + '<span class="button-icon"><img src="'+url+'/static/imgs/create-board.png"></span>'
                        + '<span class="create-label">Create Board</span>'
                    + '</div>'
                + '</div>'
            + '</div>';
        return content;
    }

    function buildBoardCreate() {
        var content = '<div class="board-create">'
                + '<div class="form-create-board">'
                    + '<div class="section-top">'
                        + '<div class="title-wrapper">'
                            + '<h1 class="modal-heading">Create board</h1>'
                        + '</div>'
                    + '</div>'
                    + '<div class="section-body">'
                        + '<div class="bc-group bc-board-name">'
                            + '<h3 class="group-label">Name</h3>'
                            + '<input type="text" name="board_name" placeholder="Like &quot;My Board&quot;">'
                        + '</div>'
                        + '<div class="bc-group bc-board-secret">'
                            + '<h3 class="group-label">Secret</h3>'
                            + '<div class="switch-toggle">'
                                + '<p class="switch-label on-label">Yes</p>'
                                + '<p class="switch-label off-label">No</p>'
                                + '<div class="switch-slider"></div>'
                                + '<input type="checkbox" class="board-secret-checkbox" name="board_secret">'
                            + '</div>'
                        + '</div>'
                    + '</div>'
                    + '<div class="section-bottom">'
                        + '<div class="form-board-buttons">'
                            + '<button type="button" class="board-button create-board-cancel">'
                                + '<span class="button-text">Cancel</span>'
                            + '</button>'
                            + '<button type="submit" class="board-button create-board-submit">'
                                + '<span class="button-text">Create</span>'
                            + '</button>'
                        + '</div>'
                    + '</div>'
                + '</div>'
            + '</div>';
        return content;
    }

    /**
     * Init modal
     */
    var SpacebarModal = new ModalBoard({
        content: '',
        className: 'zoom'
    });

    // Search Board
    $(document).on("input", ".board-picker input[name='search_board_name']", function() {
        inputBoardName = $(this).val();
        var $searchCreateName = $('.search-create .create-name');
        var $boardContext = $(".board-items .item .board-name");
        $boardContext.closest('.item').show().unmark();
        $searchCreateName.text(inputBoardName);
        if (inputBoardName) {
            isBoardSearch(true);
            $boardContext.mark(inputBoardName, {
                done: function() {
                    $boardContext.not(":has(mark)").closest('.item').hide();
                }
            });
        } else {
            isBoardSearch(false);
        }
    });
    $(document).on("input", ".board-create input[name='board_name']", function() {
        var inputBoardName = $(this).val();
        var $createButton = $(".board-create .create-board-submit");
        if (inputBoardName) {
            $createButton.prop('disabled', false);
        } else {
            $createButton.prop('disabled', true);
        }
    });

    // Click to call board create
    $(document).on('click', '.create-board', function(e){
        e.preventDefault();
        var modalBoard = $('.sb-content .modal-board');
        var boardCreate = buildBoardCreate();
        modalBoard.append(boardCreate);
        $('.board-create input[name=board_name]').val(inputBoardName);
        setTimeout(function(){
            $('.board-create').addClass('bc-open');
        }, 100);
    });
    $(document).on('click', '.bc-board-secret .switch-toggle', function(){
        // Toggle On/Off
        secretToggle(this);
    });
    function secretToggle(self) {
        var switchToggle = $(self);
        var switchCheckbox = $(self).children('.board-secret-checkbox');
        if (!switchToggle.hasClass('switch-on')) {
            switchToggle.addClass('switch-on');
            switchCheckbox.prop("checked", true);
        } else {
            switchToggle.removeClass('switch-on');
            switchCheckbox.prop("checked", false);
        }
        // console.log(switchCheckbox.is(':checked'));
    }

    // Close board create
    $(document).on('click', '.sb-close, .sb-overlay, .create-board-cancel', function(){
        var boardCreate = $('.modal-board .board-create');
        if ($(boardCreate).length > 0) {
            boardCreate.removeClass('bc-closing');
            boardCreate.addClass('bc-closing');

            var transitionEnd = transitionSelect();
            document.querySelector('.modal-board .board-create').addEventListener(transitionEnd, function() {
                boardCreate.remove();
            });
        } else {
            SpacebarModal.close();
        }
    });


    /**
     * Call Modal
     */
    $(document).on('click', '.save-btn, .save-content-btn', function(e) {
        e.preventDefault();
        cardID = $(this).data('id');
        title  = $(this).data('title');
        image  = $(this).data('image');
        author = $(this).data('author');
        thumb  = $(this).data('thumb');

        // demo without ajax
        SpacebarModal.open();
        sbItem = {
            "id": cardID,
            "title": title,
            "image": image,
            "author": author,
            "thumb": thumb,
        }
        $('.modal-card .modal-card-inner').append(buildModalCard(sbItem));        

        // $.ajax({
        //     type: "POST",
        //     url: ,
        //     data: ,
        //     beforeSend: function() {
        //         // do something when ajax query card data
        //     }
        //     success: function( response ) {
        //         SpacebarModal.open();
        //         $('.modal-card .modal-card-inner').append(buildModalCard(response));
        //     }
        // });
    });

    /**
     * Save board
     */
    $(document).on('click', '.board-picker .board-items .item', function(e){
        var board_id   = $(this).data('board-id');
        var content_id = sbItem.id;
        var data = {
            board_id: board_id,
            content_id: content_id,
            image: sbItem.thumb
        }      
        // console.log(data);
        // Ajax - Save board        
        $.ajax({
            type: "POST",
            url: url+'/apis/Boards/add_content',
            data: data,
            success: function( response ) {
                console.log( response );
                SpacebarModal.close();
            }
        });
    });

    /**
     * Create Board
     */
    $(document).on('click', '.form-create-board .create-board-submit', function(e){
        // Click to create board.       
        var data = {
            name: $('.board-create input[name=board_name]').val(),
            accessing: $('.board-create input[name=board_secret]').is(':checked'),
            content_id: sbItem.id,
            image: sbItem.thumb
        }        
        
        $.ajax({
            type: "POST",
            url: url+'/apis/Boards/create',
            data: data,
            success: function( response ) {
                obj = jQuery.parseJSON(response);
                boardItems.push(obj.message);            
                SpacebarModal.close();                
            }
        });
    });


    function getBoard(){
        boardItems = [];
        $.ajax({
            type: "POST",
            url: url+'/apis/Boards/get_boards',
            // data: data,
            success: function( response ) {
                objs = jQuery.parseJSON(response);
                items = objs.message;
                $(items).each(function(index, value) {
                    tmp          = [];
                    tmp['id']    = value.id;
                    tmp['name']  = value.name;
                    tmp['image'] = value.image;
                    boardItems.push(tmp);                    
                });               
                buildBoardItems(boardItems);
                SpacebarModal.close();                
            }
        });
    }
}());



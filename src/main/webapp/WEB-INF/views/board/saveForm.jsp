<%@ page language="java" contentType="text/html;charset=utf-8" pageEncoding="utf-8" %>
<%@ include file="../layout/header.jsp"%>
<div class="container">
    <div class="container">
        <form >
            <div class="form-group">
                <input type="text" name="Enter-title" class="form-control" placeholder="Enter title" id="title">
            </div>
            <div class="form-group">
                <textarea class="form-control summernote" rows="5" id="content"></textarea>
            </div>
        </form>
        <button id="btn-save" class="btn btn-primary">글쓰기완료</button>
    </div>
    <script>
        $('.summernote').summernote({
            tabsize: 2,
            height: 300
        });
    </script>
    <script src="/js/board.js"></script>
<%@ include file="../layout/footer.jsp" %>
